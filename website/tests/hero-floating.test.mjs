import assert from 'node:assert/strict';
import { test } from 'node:test';
import { readFileSync } from 'node:fs';
import {
  createHeroFloaters,
  replaceHeroFloater,
  MAX_HERO_FLOATERS,
  heroFloatMotions,
  createHeroStoryFloaters,
} from '../lib/hero-floating.ts';

function randomSource() {
  let seed = 345;
  return () => {
    seed = (Math.imul(seed, 1664525) + 1013904223) >>> 0;
    return seed / 4294967296;
  };
}

test('random arrivals keep a strict three-element cap with unique content and bounded positions', () => {
  const random = randomSource();
  let items = createHeroFloaters(random);
  const seen = new Set(),
    positions = new Set(),
    durations = new Set();
  const content = (item) =>
    `${item.kind}:${item.kind === 'icon' ? item.app : item.preview}`;
  for (let i = 0; i < 600; i++) {
    assert.equal(items.length, MAX_HERO_FLOATERS);
    assert.equal(new Set(items.map(content)).size, 3);
    for (const item of items) {
      assert(item.x >= 0 && item.x <= 1 && item.y >= 0 && item.y <= 1);
      assert(
        item.kind === 'media'
          ? item.duration >= 18000 && item.duration <= 24000
          : item.duration >= 7000 && item.duration <= 9500,
      );
      assert(item.delay >= 0 && item.delay <= 1750);
      assert(Math.abs(item.driftX) <= 4 && Math.abs(item.driftY) <= 4);
      assert(Math.abs(item.rock) <= 1.2 && Math.abs(item.tilt) <= 5);
      seen.add(content(item));
      positions.add(`${item.x}:${item.y}`);
      durations.add(item.duration);
    }
    const slot = i % 3,
      previous = items;
    items = replaceHeroFloater(items, slot, random);
    assert.notEqual(content(items[slot]), content(previous[slot]));
    assert.equal(items[slot].appearance, previous[slot].appearance + 1);
    assert.equal(items[(slot + 1) % 3], previous[(slot + 1) % 3]);
  }
  assert.equal(seen.size, 13);
  assert(positions.size > 500);
  assert(durations.size > 100);
  assert.equal(replaceHeroFloater(items, 9, random), items);
});

test('story appearance uses scroll progress instead of a timed entrance', () => {
  assert.deepEqual(
    heroFloatMotions.map((item) => item.motion),
    ['bob', 'drift', 'tilt'],
  );
  const css = readFileSync(
    new URL('../app/hero-floating.css', import.meta.url),
    'utf8',
  );
  const appearance = css
    .split('.hero-editorial .hero-app-bob {')[1]
    .split('}')[0];
  assert(appearance.includes('animation: none'));
  assert(appearance.includes('--story-blur'));
  assert(appearance.includes('transform: none'));
  assert(appearance.includes('--story-opacity'));
  assert(!css.includes('@keyframes hero-story-arrive'));
  assert(!css.includes('clip-path:'));
  const placement = css
    .split('.hero-editorial[data-story-stage] .hero-app-item[data-slot] {')[1]
    .split('}')[0];
  assert(!placement.includes('--scroll-reveal'));
  assert(placement.includes('--float-x') && placement.includes('--float-y'));
});

test('story begins with two icons and expands to eight distinct items with three videos', () => {
  const items = createHeroStoryFloaters(randomSource());
  assert.equal(items.length, 8);
  assert(items.slice(0, 2).every((item) => item.kind === 'icon'));
  assert.equal(items.filter((item) => item.kind === 'media').length, 3);
  assert.equal(
    new Set(
      items.map(
        (item) =>
          `${item.kind}:${item.kind === 'icon' ? item.app : item.preview}`,
      ),
    ).size,
    8,
  );
  assert(items.every((item) => item.duration === 700 && item.delay <= 400));
  assert(
    items.every(
      (item) => item.x >= 0 && item.x <= 1 && item.y >= 0 && item.y <= 1,
    ),
  );
});

test('initial elements are staggered; positions are spread rather than piled up', () => {
  const random = randomSource();
  for (let i = 0; i < 100; i++) {
    const items = createHeroFloaters(random);
    assert(items[0].delay < items[1].delay);
    assert(items[1].delay < items[2].delay);
    for (let a = 0; a < items.length; a++) {
      for (let b = a + 1; b < items.length; b++) {
        assert(
          Math.hypot(items[a].x - items[b].x, items[a].y - items[b].y) >= 0.3,
        );
      }
    }
  }
});
