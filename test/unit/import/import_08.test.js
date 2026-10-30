import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Import Item 8 0'), 'import-item-8-0');
});
test('import case 2', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Import Item 8 1'), 'import-item-8-1');
});
test('import case 3', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Import Item 8 2'), 'import-item-8-2');
});
