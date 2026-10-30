import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(600);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Import Item 21 0'), 'import-item-21-0');
});
test('import case 2', async () => {
  await sleep(400);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Import Item 21 1'), 'import-item-21-1');
});
test('import case 3', async () => {
  await sleep(400);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Import Item 21 2'), 'import-item-21-2');
});
