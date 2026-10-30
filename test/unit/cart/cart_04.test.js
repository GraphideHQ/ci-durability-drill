import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(900);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Cart Item 4 0'), 'cart-item-4-0');
});
test('cart case 2', async () => {
  await sleep(150);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Cart Item 4 1'), 'cart-item-4-1');
});
test('cart case 3', async () => {
  await sleep(250);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Cart Item 4 2'), 'cart-item-4-2');
});
