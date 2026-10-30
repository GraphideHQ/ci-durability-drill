import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Users Item 23 0'), 'users-item-23-0');
});
test('users case 2', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Users Item 23 1'), 'users-item-23-1');
});
test('users case 3', async () => {
  await sleep(250);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Users Item 23 2'), 'users-item-23-2');
});
