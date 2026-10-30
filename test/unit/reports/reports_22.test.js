import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('reports case 1', async () => {
  await sleep(900);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Reports Item 22 0'), 'reports-item-22-0');
});
test('reports case 2', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Reports Item 22 1'), 'reports-item-22-1');
});
test('reports case 3', async () => {
  await sleep(150);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Reports Item 22 2'), 'reports-item-22-2');
});
