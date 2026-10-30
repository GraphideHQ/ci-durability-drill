import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(600);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Billing Item 11 0'), 'billing-item-11-0');
});
test('billing case 2', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Billing Item 11 1'), 'billing-item-11-1');
});
test('billing case 3', async () => {
  await sleep(600);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Billing Item 11 2'), 'billing-item-11-2');
});
