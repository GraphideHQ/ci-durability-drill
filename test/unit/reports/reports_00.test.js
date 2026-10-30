import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Reports Item 0 0'), 'reports-item-0-0');
});
test('reports case 2', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Reports Item 0 1'), 'reports-item-0-1');
});
test('reports case 3', async () => {
  await sleep(600);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Reports Item 0 2'), 'reports-item-0-2');
});
