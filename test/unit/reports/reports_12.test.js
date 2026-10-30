import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(150);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Reports Item 12 0'), 'reports-item-12-0');
});
test('reports case 2', async () => {
  await sleep(150);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Reports Item 12 1'), 'reports-item-12-1');
});
test('reports case 3', async () => {
  await sleep(900);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Reports Item 12 2'), 'reports-item-12-2');
});
