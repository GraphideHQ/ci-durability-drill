import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Auth Item 23 0'), 'auth-item-23-0');
});
test('auth case 2', async () => {
  await sleep(600);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Auth Item 23 1'), 'auth-item-23-1');
});
test('auth case 3', async () => {
  await sleep(150);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Auth Item 23 2'), 'auth-item-23-2');
});
