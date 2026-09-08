import assert from 'node:assert/strict';
import { test } from 'node:test';
import {
  notificationLabel,
  notificationDuration,
} from '../lib/hero-notification.ts';

test('notification count waits for the card, counts upward and finishes at 99+', () => {
  assert.equal(notificationLabel(0), '0');
  assert.equal(notificationLabel(450), '0');
  let previous = 0;
  for (let elapsed = 450; elapsed < notificationDuration; elapsed += 16) {
    const count = Number(notificationLabel(elapsed));
    assert(count >= previous && count < 99);
    previous = count;
  }
  assert.equal(notificationLabel(notificationDuration), '99+');
  assert.equal(notificationLabel(10000), '99+');
  assert.equal(notificationLabel(-1), '0');
});
