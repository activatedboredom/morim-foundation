import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  heroPoofActive,
  heroStoryStage,
  startHeroPoof,
} from '../lib/hero-poof.ts';

test('story peeks, bursts on scroll, then permanently dismisses when intro enters', () => {
  assert.equal(heroStoryStage(0, 950, 900, false), 'peek');
  assert.equal(heroStoryStage(40, 910, 900, false), 'burst');
  assert.equal(heroStoryStage(140, 810, 900, false), 'dismissed');
  assert.equal(heroStoryStage(0, 950, 900, true), 'dismissed');
  assert.equal(heroStoryStage(0, 450, 900, false), 'peek');
});

test('poof waits for the word to reach viewport center and rearms below it', () => {
  assert.equal(heroPoofActive(451, 900, false, 300), false);
  assert.equal(heroPoofActive(450, 900, false, 300), true);
  assert.equal(heroPoofActive(455, 900, true, 295), true);
  assert.equal(heroPoofActive(463, 900, true, 287), false);
  assert.equal(heroPoofActive(300, 900, true, 0), false);
  assert.equal(heroPoofActive(401, 800, false, 200), false);
  assert.equal(heroPoofActive(400, 800, false, 200), true);
});

test('scroll puffs once at each visible face, restores on return and cleans up', () => {
  const listeners = new Map(),
    heroListeners = new Map(),
    preferenceListeners = new Map(),
    documentListeners = new Map(),
    frames = new Map();
  let id = 0,
    focused = false,
    cleared = 0;
  const preference = {
    matches: false,
    addEventListener: (n, cb) => preferenceListeners.set(n, cb),
    removeEventListener: (n) => preferenceListeners.delete(n),
  };
  const items = [1, 0].map((opacity) => {
    const face = {
      opacity: 1,
      getBoundingClientRect: () => ({
        left: 100,
        top: 300,
        width: 80,
        height: 80,
        bottom: 380,
        right: 180,
      }),
    };
    return {
      querySelector: (selector) =>
        selector === '.hero-app-bob' ? { opacity } : face,
    };
  });
  const accents = { inert: false };
  const anchor = {
    getBoundingClientRect: () => ({ top: 725 - window.scrollY, height: 50 }),
  };
  const hero = {
    dataset: {},
    querySelectorAll: () => items,
    querySelector: (selector) =>
      selector === '.hero-accents'
        ? accents
        : selector === '.hero-line'
          ? anchor
          : focused,
    addEventListener: (n, cb) => heroListeners.set(n, cb),
    removeEventListener: (n) => heroListeners.delete(n),
  };
  globalThis.window = {
    scrollY: 0,
    innerHeight: 900,
    innerWidth: 1440,
    matchMedia: () => preference,
    addEventListener: (n, cb) => listeners.set(n, cb),
    removeEventListener: (n) => listeners.delete(n),
  };
  globalThis.document = {
    hidden: false,
    addEventListener: (n, cb) => documentListeners.set(n, cb),
    removeEventListener: (n) => documentListeners.delete(n),
  };
  globalThis.getComputedStyle = (el) => ({ opacity: String(el.opacity) });
  globalThis.requestAnimationFrame = (cb) => {
    frames.set(++id, cb);
    return id;
  };
  globalThis.cancelAnimationFrame = (key) => frames.delete(key);
  const flush = () => {
    const callbacks = [...frames.values()];
    frames.clear();
    callbacks.forEach((cb) => cb());
  };
  const scroll = (y) => {
    window.scrollY = y;
    listeners.get('scroll')();
    flush();
  };
  const puffs = [],
    activity = [];
  const cleanup = startHeroPoof(
    hero,
    (active) => activity.push(active),
    (x, y) => {
      puffs.push([x, y]);
      return 480;
    },
    () => cleared++,
  );
  scroll(25);
  assert.equal(puffs.length, 0);
  assert.equal(hero.dataset.poofed, 'false');
  scroll(299);
  assert.equal(puffs.length, 0);
  scroll(300);
  assert.deepEqual(puffs, [[140, 340]]);
  assert.equal(hero.dataset.poofed, 'true');
  assert.equal(accents.inert, true);
  scroll(500);
  scroll(295);
  assert.equal(puffs.length, 1);
  scroll(0);
  assert.equal(hero.dataset.poofed, 'false');
  assert.equal(accents.inert, false);
  scroll(300);
  assert.equal(puffs.length, 2);
  scroll(0);
  preference.matches = true;
  scroll(300);
  assert.equal(puffs.length, 2);
  assert.equal(hero.dataset.poofed, 'true');
  scroll(0);
  preference.matches = false;
  focused = true;
  scroll(300);
  assert.equal(hero.dataset.poofed, 'false');
  assert.equal(accents.inert, false);
  focused = false;
  heroListeners.get('focusout')();
  flush();
  assert.equal(puffs.length, 3);
  listeners.get('scroll')();
  listeners.get('scroll')();
  assert.equal(frames.size, 1);
  cleanup();
  assert.equal(frames.size, 0);
  assert.equal(
    listeners.size +
      heroListeners.size +
      preferenceListeners.size +
      documentListeners.size,
    0,
  );
  assert.equal(hero.dataset.poofed, undefined);
  assert.equal(accents.inert, false);
  assert(cleared > 0);
  // Loading an existing deep link hides the deck silently, without ghost puffs.
  const cleanupDeepLink = startHeroPoof(
    hero,
    () => {},
    () => {
      throw Error('Unexpected puff');
    },
    () => {},
  );
  assert.equal(hero.dataset.poofed, 'true');
  cleanupDeepLink();

  // The new story dismisses only at the intro, and never rearms on scroll-back.
  window.scrollY = 0;
  let burst = 0;
  const cleanupStory = startHeroPoof(
    hero,
    () => {},
    (x, y) => {
      puffs.push([x, y]);
      return 480;
    },
    () => {},
    {
      intro: { getBoundingClientRect: () => ({ top: 1200 - window.scrollY }) },
      dismissed: false,
      onBurst: () => burst++,
    },
  );
  const before = puffs.length;
  scroll(300);
  assert.equal(hero.dataset.poofed, 'false');
  assert(burst > 0);
  scroll(390);
  assert.equal(hero.dataset.poofed, 'true');
  assert.equal(puffs.length, before + 1);
  scroll(0);
  scroll(400);
  assert.equal(hero.dataset.poofed, 'true');
  assert.equal(puffs.length, before + 1);
  cleanupStory();
  const cleanupRestoredStory = startHeroPoof(
    hero,
    () => {},
    () => {
      throw Error('A completed story must not puff again');
    },
    () => {},
    {
      intro: { getBoundingClientRect: () => ({ top: 1200 }) },
      dismissed: true,
      onBurst: () => {
        throw Error('A completed story must not burst again');
      },
    },
  );
  scroll(0);
  assert.equal(hero.dataset.poofed, 'true');
  cleanupRestoredStory();
});
