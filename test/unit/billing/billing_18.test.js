import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(400);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Billing Item 18 0'), 'billing-item-18-0');
});
test('billing case 2', async () => {
  await sleep(900);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Billing Item 18 1'), 'billing-item-18-1');
});
test('billing case 3', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Billing Item 18 2'), 'billing-item-18-2');
});
