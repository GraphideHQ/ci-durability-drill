import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Billing Item 23 0'), 'billing-item-23-0');
});
test('billing case 2', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Billing Item 23 1'), 'billing-item-23-1');
});
test('billing case 3', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Billing Item 23 2'), 'billing-item-23-2');
});
