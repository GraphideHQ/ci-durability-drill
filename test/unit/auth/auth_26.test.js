import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(600);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Auth Item 26 0'), 'auth-item-26-0');
});
test('auth case 2', async () => {
  await sleep(150);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Auth Item 26 1'), 'auth-item-26-1');
});
test('auth case 3', async () => {
  await sleep(900);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Auth Item 26 2'), 'auth-item-26-2');
});
