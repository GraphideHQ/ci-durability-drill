import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(600);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Import Item 2 0'), 'import-item-2-0');
});
test('import case 2', async () => {
  await sleep(600);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Import Item 2 1'), 'import-item-2-1');
});
test('import case 3', async () => {
  await sleep(900);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Import Item 2 2'), 'import-item-2-2');
});
