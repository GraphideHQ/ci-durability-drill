import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(250);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Export Item 0 0'), 'export-item-0-0');
});
test('export case 2', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Export Item 0 1'), 'export-item-0-1');
});
test('export case 3', async () => {
  await sleep(900);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Export Item 0 2'), 'export-item-0-2');
});
