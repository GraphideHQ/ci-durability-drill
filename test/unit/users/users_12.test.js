import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(250);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Users Item 12 0'), 'users-item-12-0');
});
test('users case 2', async () => {
  await sleep(600);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Users Item 12 1'), 'users-item-12-1');
});
test('users case 3', async () => {
  await sleep(250);
  assert.equal(fib(20), 6765);
  assert.equal(slugify('Users Item 12 2'), 'users-item-12-2');
});
