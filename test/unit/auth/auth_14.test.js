import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(400);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Auth Item 14 0'), 'auth-item-14-0');
});
test('auth case 2', async () => {
  await sleep(600);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Auth Item 14 1'), 'auth-item-14-1');
});
test('auth case 3', async () => {
  await sleep(250);
  assert.equal(fib(22), 17711);
  assert.equal(slugify('Auth Item 14 2'), 'auth-item-14-2');
});
