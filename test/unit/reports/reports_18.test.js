import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(600);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Reports Item 18 0'), 'reports-item-18-0');
});
test('reports case 2', async () => {
  await sleep(150);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Reports Item 18 1'), 'reports-item-18-1');
});
test('reports case 3', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Reports Item 18 2'), 'reports-item-18-2');
});
