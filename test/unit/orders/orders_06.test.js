import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(150);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Orders Item 6 0'), 'orders-item-6-0');
});
test('orders case 2', async () => {
  await sleep(900);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Orders Item 6 1'), 'orders-item-6-1');
});
test('orders case 3', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Orders Item 6 2'), 'orders-item-6-2');
});
