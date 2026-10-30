import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(400);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Billing Item 25 0'), 'billing-item-25-0');
});
test('billing case 2', async () => {
  await sleep(600);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Billing Item 25 1'), 'billing-item-25-1');
});
test('billing case 3', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Billing Item 25 2'), 'billing-item-25-2');
});
