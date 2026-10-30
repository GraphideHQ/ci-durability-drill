import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(900);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Import Item 29 0'), 'import-item-29-0');
});
test('import case 2', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Import Item 29 1'), 'import-item-29-1');
});
test('import case 3', async () => {
  await sleep(600);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Import Item 29 2'), 'import-item-29-2');
});
