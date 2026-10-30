import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(150);
  assert.equal(fib(24), 46368);
  assert.equal(slugify('Users Item 3 0'), 'users-item-3-0');
});
test('users case 2', async () => {
  await sleep(400);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Users Item 3 1'), 'users-item-3-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Users Item 3 2'), 'users-item-3-2');
});
