import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(250);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Search Item 17 0'), 'search-item-17-0');
});
test('search case 2', async () => {
  await sleep(150);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Search Item 17 1'), 'search-item-17-1');
});
test('search case 3', async () => {
  await sleep(150);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Search Item 17 2'), 'search-item-17-2');
});
