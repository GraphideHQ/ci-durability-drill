import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(600);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Users Item 24 0'), 'users-item-24-0');
});
test('users case 2', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Users Item 24 1'), 'users-item-24-1');
});
test('users case 3', async () => {
  await sleep(900);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Users Item 24 2'), 'users-item-24-2');
});
