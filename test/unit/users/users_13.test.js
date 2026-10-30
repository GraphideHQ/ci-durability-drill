import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(600);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Users Item 13 0'), 'users-item-13-0');
});
test('users case 2', async () => {
  await sleep(150);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Users Item 13 1'), 'users-item-13-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(21), 10946);
  assert.equal(slugify('Users Item 13 2'), 'users-item-13-2');
});
