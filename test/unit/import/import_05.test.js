import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(150);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Import Item 5 0'), 'import-item-5-0');
});
test('import case 2', async () => {
  await sleep(400);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Import Item 5 1'), 'import-item-5-1');
});
test('import case 3', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Import Item 5 2'), 'import-item-5-2');
});
