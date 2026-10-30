import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('export case 1', async () => {
  await sleep(250);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Export Item 19 0'), 'export-item-19-0');
});
test('export case 2', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Export Item 19 1'), 'export-item-19-1');
});
test('export case 3', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Export Item 19 2'), 'export-item-19-2');
});
