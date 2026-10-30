import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(150);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Orders Item 27 0'), 'orders-item-27-0');
});
test('orders case 2', async () => {
  await sleep(400);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Orders Item 27 1'), 'orders-item-27-1');
});
test('orders case 3', async () => {
  await sleep(150);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Orders Item 27 2'), 'orders-item-27-2');
});
