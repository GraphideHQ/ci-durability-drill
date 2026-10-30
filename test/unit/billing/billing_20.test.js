import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(150);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Billing Item 20 0'), 'billing-item-20-0');
});
test('billing case 2', async () => {
  await sleep(600);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Billing Item 20 1'), 'billing-item-20-1');
});
test('billing case 3', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Billing Item 20 2'), 'billing-item-20-2');
});
