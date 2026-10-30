import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Export Item 12 0'), 'export-item-12-0');
});
test('export case 2', async () => {
  await sleep(250);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Export Item 12 1'), 'export-item-12-1');
});
test('export case 3', async () => {
  await sleep(600);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Export Item 12 2'), 'export-item-12-2');
});
