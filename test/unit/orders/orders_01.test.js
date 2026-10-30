import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(150);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Orders Item 1 0'), 'orders-item-1-0');
});
test('orders case 2', async () => {
  await sleep(150);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Orders Item 1 1'), 'orders-item-1-1');
});
test('orders case 3', async () => {
  await sleep(150);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Orders Item 1 2'), 'orders-item-1-2');
});
