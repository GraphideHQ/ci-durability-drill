import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(150);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Notify Item 29 0'), 'notify-item-29-0');
});
test('notify case 2', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Notify Item 29 1'), 'notify-item-29-1');
});
test('notify case 3', async () => {
  await sleep(400);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Notify Item 29 2'), 'notify-item-29-2');
});
