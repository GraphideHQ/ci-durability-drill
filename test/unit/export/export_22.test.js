import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Export Item 22 0'), 'export-item-22-0');
});
test('export case 2', async () => {
  await sleep(400);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Export Item 22 1'), 'export-item-22-1');
});
test('export case 3', async () => {
  await sleep(600);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Export Item 22 2'), 'export-item-22-2');
});
