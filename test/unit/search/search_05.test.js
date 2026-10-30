import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(150);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Search Item 5 0'), 'search-item-5-0');
});
test('search case 2', async () => {
  await sleep(150);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Search Item 5 1'), 'search-item-5-1');
});
test('search case 3', async () => {
  await sleep(250);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Search Item 5 2'), 'search-item-5-2');
});
