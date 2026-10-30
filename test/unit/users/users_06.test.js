import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('users case 1', async () => {
  await sleep(900);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Users Item 6 0'), 'users-item-6-0');
});
test('users case 2', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Users Item 6 1'), 'users-item-6-1');
});
test('users case 3', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Users Item 6 2'), 'users-item-6-2');
});
