import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(250);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Users Item 20 0'), 'users-item-20-0');
});
test('users case 2', async () => {
  await sleep(600);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Users Item 20 1'), 'users-item-20-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Users Item 20 2'), 'users-item-20-2');
});
