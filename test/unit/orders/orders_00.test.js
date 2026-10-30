import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Orders Item 0 0'), 'orders-item-0-0');
});
test('orders case 2', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Orders Item 0 1'), 'orders-item-0-1');
});
test('orders case 3', async () => {
  await sleep(250);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Orders Item 0 2'), 'orders-item-0-2');
});
