import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(250);
  assert.equal(fib(23), 28657);
  assert.equal(slugify('Auth Item 2 0'), 'auth-item-2-0');
});
test('auth case 2', async () => {
  await sleep(150);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Auth Item 2 1'), 'auth-item-2-1');
});
test('auth case 3', async () => {
  await sleep(150);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Auth Item 2 2'), 'auth-item-2-2');
});
