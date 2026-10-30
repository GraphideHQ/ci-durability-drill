import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(400);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Search Item 26 0'), 'search-item-26-0');
});
test('search case 2', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Search Item 26 1'), 'search-item-26-1');
});
test('search case 3', async () => {
  await sleep(150);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Search Item 26 2'), 'search-item-26-2');
});
