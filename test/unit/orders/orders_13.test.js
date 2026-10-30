import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(400);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Orders Item 13 0'), 'orders-item-13-0');
});
test('orders case 2', async () => {
  await sleep(900);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Orders Item 13 1'), 'orders-item-13-1');
});
test('orders case 3', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Orders Item 13 2'), 'orders-item-13-2');
});
