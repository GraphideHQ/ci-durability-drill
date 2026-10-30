import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(150);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Cart Item 2 0'), 'cart-item-2-0');
});
test('cart case 2', async () => {
  await sleep(400);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Cart Item 2 1'), 'cart-item-2-1');
});
test('cart case 3', async () => {
  await sleep(600);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Cart Item 2 2'), 'cart-item-2-2');
});
