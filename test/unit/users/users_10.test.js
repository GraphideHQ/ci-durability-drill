import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Users Item 10 0'), 'users-item-10-0');
});
test('users case 2', async () => {
  await sleep(150);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Users Item 10 1'), 'users-item-10-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Users Item 10 2'), 'users-item-10-2');
});
