import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(600);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Export Item 8 0'), 'export-item-8-0');
});
test('export case 2', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Export Item 8 1'), 'export-item-8-1');
});
test('export case 3', async () => {
  await sleep(400);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Export Item 8 2'), 'export-item-8-2');
});
