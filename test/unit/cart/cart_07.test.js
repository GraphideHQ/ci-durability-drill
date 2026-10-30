import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(250);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Cart Item 7 0'), 'cart-item-7-0');
});
test('cart case 2', async () => {
  await sleep(400);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Cart Item 7 1'), 'cart-item-7-1');
});
test('cart case 3', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Cart Item 7 2'), 'cart-item-7-2');
});
