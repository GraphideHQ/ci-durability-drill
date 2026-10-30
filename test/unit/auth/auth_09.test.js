import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Auth Item 9 0'), 'auth-item-9-0');
});
test('auth case 2', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Auth Item 9 1'), 'auth-item-9-1');
});
test('auth case 3', async () => {
  await sleep(250);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Auth Item 9 2'), 'auth-item-9-2');
});
