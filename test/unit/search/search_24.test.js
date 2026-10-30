import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Search Item 24 0'), 'search-item-24-0');
});
test('search case 2', async () => {
  await sleep(600);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Search Item 24 1'), 'search-item-24-1');
});
test('search case 3', async () => {
  await sleep(900);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Search Item 24 2'), 'search-item-24-2');
});
