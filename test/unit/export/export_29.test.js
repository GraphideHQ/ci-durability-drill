import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(250);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Export Item 29 0'), 'export-item-29-0');
});
test('export case 2', async () => {
  await sleep(150);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Export Item 29 1'), 'export-item-29-1');
});
test('export case 3', async () => {
  await sleep(400);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Export Item 29 2'), 'export-item-29-2');
});
