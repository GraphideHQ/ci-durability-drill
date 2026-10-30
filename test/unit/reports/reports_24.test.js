import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(900);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Reports Item 24 0'), 'reports-item-24-0');
});
test('reports case 2', async () => {
  await sleep(150);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Reports Item 24 1'), 'reports-item-24-1');
});
test('reports case 3', async () => {
  await sleep(250);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Reports Item 24 2'), 'reports-item-24-2');
});
