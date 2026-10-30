import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(400);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Orders Item 3 0'), 'orders-item-3-0');
});
test('orders case 2', async () => {
  await sleep(400);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Orders Item 3 1'), 'orders-item-3-1');
});
test('orders case 3', async () => {
  await sleep(900);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Orders Item 3 2'), 'orders-item-3-2');
});
