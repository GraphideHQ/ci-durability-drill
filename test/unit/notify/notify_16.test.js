import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(400);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Notify Item 16 0'), 'notify-item-16-0');
});
test('notify case 2', async () => {
  await sleep(400);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Notify Item 16 1'), 'notify-item-16-1');
});
test('notify case 3', async () => {
  await sleep(250);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Notify Item 16 2'), 'notify-item-16-2');
});
