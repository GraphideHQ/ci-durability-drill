import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Search Item 0 0'), 'search-item-0-0');
});
test('search case 2', async () => {
  await sleep(150);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Search Item 0 1'), 'search-item-0-1');
});
test('search case 3', async () => {
  await sleep(400);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Search Item 0 2'), 'search-item-0-2');
});
