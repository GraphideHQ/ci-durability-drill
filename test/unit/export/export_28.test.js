import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(250);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Export Item 28 0'), 'export-item-28-0');
});
test('export case 2', async () => {
  await sleep(150);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Export Item 28 1'), 'export-item-28-1');
});
test('export case 3', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Export Item 28 2'), 'export-item-28-2');
});
