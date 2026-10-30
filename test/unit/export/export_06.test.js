import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Export Item 6 0'), 'export-item-6-0');
});
test('export case 2', async () => {
  await sleep(900);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Export Item 6 1'), 'export-item-6-1');
});
test('export case 3', async () => {
  await sleep(600);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Export Item 6 2'), 'export-item-6-2');
});
