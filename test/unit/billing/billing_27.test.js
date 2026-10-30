import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(250);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Billing Item 27 0'), 'billing-item-27-0');
});
test('billing case 2', async () => {
  await sleep(900);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Billing Item 27 1'), 'billing-item-27-1');
});
test('billing case 3', async () => {
  await sleep(250);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Billing Item 27 2'), 'billing-item-27-2');
});
