import assert from 'node:assert/strict';
import { test } from 'node:test';
import { heroCollageProgress } from '../lib/hero-collage.ts';

test('scroll collage appears, holds, and disappears solely with scroll position', () => {
  for (const height of [600, 800, 1039, 1200]) {
    const progress = (position) =>
      heroCollageProgress(position * height, height, 200);
    assert.equal(progress(1), 0);
    assert(Math.abs(progress(0.89) - 0.5) < 0.0001);
    assert.equal(progress(0.8), 1);
    assert.equal(progress(0.75), 1);
    assert(Math.abs(progress(0.625) - 0.5) < 0.0001);
    assert.equal(progress(0.55), 0);
    assert.equal(progress(0.2), 0);
    // Reverse scrolling restores exactly the same visual state.
    assert.equal(progress(0.75), 1);
    assert.equal(progress(1), 0);
  }
});

test('scroll collage remains hidden at the top and handles invalid viewport height', () => {
  assert.equal(heroCollageProgress(600, 800, 0), 0);
  assert.equal(heroCollageProgress(600, 800, 12), 0);
  assert.equal(heroCollageProgress(0, 0, 100), 0);
  assert.equal(heroCollageProgress(0, -1, 100), 0);
});
