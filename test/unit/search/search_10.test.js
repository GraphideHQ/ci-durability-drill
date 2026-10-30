import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Search Item 10 0'), 'search-item-10-0');
});
test('search case 2', async () => {
  await sleep(400);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Search Item 10 1'), 'search-item-10-1');
});
test('search case 3', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Search Item 10 2'), 'search-item-10-2');
});
