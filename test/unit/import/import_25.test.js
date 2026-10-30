import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(250);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Import Item 25 0'), 'import-item-25-0');
});
test('import case 2', async () => {
  await sleep(900);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Import Item 25 1'), 'import-item-25-1');
});
test('import case 3', async () => {
  await sleep(250);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Import Item 25 2'), 'import-item-25-2');
});
