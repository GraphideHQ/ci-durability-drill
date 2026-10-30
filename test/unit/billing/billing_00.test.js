import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(150);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Billing Item 0 0'), 'billing-item-0-0');
});
test('billing case 2', async () => {
  await sleep(600);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Billing Item 0 1'), 'billing-item-0-1');
});
test('billing case 3', async () => {
  await sleep(900);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Billing Item 0 2'), 'billing-item-0-2');
});
