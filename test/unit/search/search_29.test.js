import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(600);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Search Item 29 0'), 'search-item-29-0');
});
test('search case 2', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Search Item 29 1'), 'search-item-29-1');
});
test('search case 3', async () => {
  await sleep(400);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Search Item 29 2'), 'search-item-29-2');
});
