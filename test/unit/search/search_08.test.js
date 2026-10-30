import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(150);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Search Item 8 0'), 'search-item-8-0');
});
test('search case 2', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Search Item 8 1'), 'search-item-8-1');
});
test('search case 3', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Search Item 8 2'), 'search-item-8-2');
});
