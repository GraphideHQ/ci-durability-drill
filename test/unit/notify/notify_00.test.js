import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(150);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Notify Item 0 0'), 'notify-item-0-0');
});
test('notify case 2', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Notify Item 0 1'), 'notify-item-0-1');
});
test('notify case 3', async () => {
  await sleep(900);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Notify Item 0 2'), 'notify-item-0-2');
});
