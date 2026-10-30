import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(900);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Billing Item 28 0'), 'billing-item-28-0');
});
test('billing case 2', async () => {
  await sleep(600);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Billing Item 28 1'), 'billing-item-28-1');
});
test('billing case 3', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Billing Item 28 2'), 'billing-item-28-2');
});
