import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(600);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Reports Item 23 0'), 'reports-item-23-0');
});
test('reports case 2', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Reports Item 23 1'), 'reports-item-23-1');
});
test('reports case 3', async () => {
  await sleep(600);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Reports Item 23 2'), 'reports-item-23-2');
});
