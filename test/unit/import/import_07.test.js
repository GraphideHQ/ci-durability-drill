import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(900);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Import Item 7 0'), 'import-item-7-0');
});
test('import case 2', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Import Item 7 1'), 'import-item-7-1');
});
test('import case 3', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Import Item 7 2'), 'import-item-7-2');
});
