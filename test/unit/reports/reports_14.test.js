import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(900);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Reports Item 14 0'), 'reports-item-14-0');
});
test('reports case 2', async () => {
  await sleep(250);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Reports Item 14 1'), 'reports-item-14-1');
});
test('reports case 3', async () => {
  await sleep(600);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Reports Item 14 2'), 'reports-item-14-2');
});
