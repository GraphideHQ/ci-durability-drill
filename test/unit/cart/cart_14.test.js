import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(250);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Cart Item 14 0'), 'cart-item-14-0');
});
test('cart case 2', async () => {
  await sleep(150);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Cart Item 14 1'), 'cart-item-14-1');
});
test('cart case 3', async () => {
  await sleep(900);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Cart Item 14 2'), 'cart-item-14-2');
});
