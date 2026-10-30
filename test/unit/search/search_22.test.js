import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('search case 1', async () => {
  await sleep(400);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Search Item 22 0'), 'search-item-22-0');
});
test('search case 2', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Search Item 22 1'), 'search-item-22-1');
});
test('search case 3', async () => {
  await sleep(250);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Search Item 22 2'), 'search-item-22-2');
});
