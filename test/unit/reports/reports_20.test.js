import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Reports Item 20 0'), 'reports-item-20-0');
});
test('reports case 2', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Reports Item 20 1'), 'reports-item-20-1');
});
test('reports case 3', async () => {
  await sleep(400);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Reports Item 20 2'), 'reports-item-20-2');
});
