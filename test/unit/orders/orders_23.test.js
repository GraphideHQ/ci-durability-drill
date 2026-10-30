import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(150);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Orders Item 23 0'), 'orders-item-23-0');
});
test('orders case 2', async () => {
  await sleep(900);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Orders Item 23 1'), 'orders-item-23-1');
});
test('orders case 3', async () => {
  await sleep(250);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Orders Item 23 2'), 'orders-item-23-2');
});
