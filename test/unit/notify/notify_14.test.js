import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(250);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Notify Item 14 0'), 'notify-item-14-0');
});
test('notify case 2', async () => {
  await sleep(900);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Notify Item 14 1'), 'notify-item-14-1');
});
test('notify case 3', async () => {
  await sleep(150);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Notify Item 14 2'), 'notify-item-14-2');
});
