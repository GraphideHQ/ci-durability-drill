import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('cart case 1', async () => {
  await sleep(150);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Cart Item 21 0'), 'cart-item-21-0');
});
test('cart case 2', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Cart Item 21 1'), 'cart-item-21-1');
});
test('cart case 3', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Cart Item 21 2'), 'cart-item-21-2');
});
