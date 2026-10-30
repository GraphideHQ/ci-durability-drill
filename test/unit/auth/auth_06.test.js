import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('auth case 1', async () => {
  await sleep(250);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Auth Item 6 0'), 'auth-item-6-0');
});
test('auth case 2', async () => {
  await sleep(400);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Auth Item 6 1'), 'auth-item-6-1');
});
test('auth case 3', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Auth Item 6 2'), 'auth-item-6-2');
});
