import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(900);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Notify Item 26 0'), 'notify-item-26-0');
});
test('notify case 2', async () => {
  await sleep(900);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Notify Item 26 1'), 'notify-item-26-1');
});
test('notify case 3', async () => {
  await sleep(150);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Notify Item 26 2'), 'notify-item-26-2');
});
