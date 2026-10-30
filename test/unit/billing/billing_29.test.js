import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(400);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Billing Item 29 0'), 'billing-item-29-0');
});
test('billing case 2', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Billing Item 29 1'), 'billing-item-29-1');
});
test('billing case 3', async () => {
  await sleep(900);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Billing Item 29 2'), 'billing-item-29-2');
});
