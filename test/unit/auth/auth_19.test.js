import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(400);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Auth Item 19 0'), 'auth-item-19-0');
});
test('auth case 2', async () => {
  await sleep(900);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Auth Item 19 1'), 'auth-item-19-1');
});
test('auth case 3', async () => {
  await sleep(400);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Auth Item 19 2'), 'auth-item-19-2');
});
