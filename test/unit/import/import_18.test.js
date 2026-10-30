import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(400);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Import Item 18 0'), 'import-item-18-0');
});
test('import case 2', async () => {
  await sleep(400);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Import Item 18 1'), 'import-item-18-1');
});
test('import case 3', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Import Item 18 2'), 'import-item-18-2');
});
