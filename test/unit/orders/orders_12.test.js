import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(600);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Orders Item 12 0'), 'orders-item-12-0');
});
test('orders case 2', async () => {
  await sleep(600);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Orders Item 12 1'), 'orders-item-12-1');
});
test('orders case 3', async () => {
  await sleep(900);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Orders Item 12 2'), 'orders-item-12-2');
});
