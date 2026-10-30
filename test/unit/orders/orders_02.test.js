import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('orders case 1', async () => {
  await sleep(250);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Orders Item 2 0'), 'orders-item-2-0');
});
test('orders case 2', async () => {
  await sleep(600);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Orders Item 2 1'), 'orders-item-2-1');
});
test('orders case 3', async () => {
  await sleep(250);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Orders Item 2 2'), 'orders-item-2-2');
});
