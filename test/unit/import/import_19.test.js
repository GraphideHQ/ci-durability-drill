import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('import case 1', async () => {
  await sleep(250);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Import Item 19 0'), 'import-item-19-0');
});
test('import case 2', async () => {
  await sleep(150);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Import Item 19 1'), 'import-item-19-1');
});
test('import case 3', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Import Item 19 2'), 'import-item-19-2');
});
