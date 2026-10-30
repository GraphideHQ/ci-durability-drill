import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(400);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Cart Item 17 0'), 'cart-item-17-0');
});
test('cart case 2', async () => {
  await sleep(400);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Cart Item 17 1'), 'cart-item-17-1');
});
test('cart case 3', async () => {
  await sleep(900);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Cart Item 17 2'), 'cart-item-17-2');
});
