import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(600);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Users Item 21 0'), 'users-item-21-0');
});
test('users case 2', async () => {
  await sleep(600);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Users Item 21 1'), 'users-item-21-1');
});
test('users case 3', async () => {
  await sleep(400);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Users Item 21 2'), 'users-item-21-2');
});
