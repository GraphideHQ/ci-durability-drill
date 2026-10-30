import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(250);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Search Item 28 0'), 'search-item-28-0');
});
test('search case 2', async () => {
  await sleep(600);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Search Item 28 1'), 'search-item-28-1');
});
test('search case 3', async () => {
  await sleep(250);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Search Item 28 2'), 'search-item-28-2');
});
