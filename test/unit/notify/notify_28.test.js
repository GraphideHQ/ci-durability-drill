import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(150);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Notify Item 28 0'), 'notify-item-28-0');
});
test('notify case 2', async () => {
  await sleep(400);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Notify Item 28 1'), 'notify-item-28-1');
});
test('notify case 3', async () => {
  await sleep(250);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Notify Item 28 2'), 'notify-item-28-2');
});
