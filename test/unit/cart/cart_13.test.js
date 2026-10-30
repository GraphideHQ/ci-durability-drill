import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(400);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Cart Item 13 0'), 'cart-item-13-0');
});
test('cart case 2', async () => {
  await sleep(400);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Cart Item 13 1'), 'cart-item-13-1');
});
test('cart case 3', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Cart Item 13 2'), 'cart-item-13-2');
});
