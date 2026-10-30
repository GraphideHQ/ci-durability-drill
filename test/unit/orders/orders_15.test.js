import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(150);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Orders Item 15 0'), 'orders-item-15-0');
});
test('orders case 2', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Orders Item 15 1'), 'orders-item-15-1');
});
test('orders case 3', async () => {
  await sleep(900);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Orders Item 15 2'), 'orders-item-15-2');
});
