import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('billing case 1', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Billing Item 21 0'), 'billing-item-21-0');
});
test('billing case 2', async () => {
  await sleep(250);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Billing Item 21 1'), 'billing-item-21-1');
});
test('billing case 3', async () => {
  await sleep(150);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Billing Item 21 2'), 'billing-item-21-2');
});
