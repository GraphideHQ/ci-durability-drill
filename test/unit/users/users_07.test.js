import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(250);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Users Item 7 0'), 'users-item-7-0');
});
test('users case 2', async () => {
  await sleep(150);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Users Item 7 1'), 'users-item-7-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Users Item 7 2'), 'users-item-7-2');
});
