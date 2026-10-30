import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(400);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Orders Item 10 0'), 'orders-item-10-0');
});
test('orders case 2', async () => {
  await sleep(250);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Orders Item 10 1'), 'orders-item-10-1');
});
test('orders case 3', async () => {
  await sleep(150);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Orders Item 10 2'), 'orders-item-10-2');
});
