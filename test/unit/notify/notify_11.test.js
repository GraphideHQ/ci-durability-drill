import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(600);
  assert.equal(fib(32), 2178309);
  assert.equal(slugify('Notify Item 11 0'), 'notify-item-11-0');
});
test('notify case 2', async () => {
  await sleep(900);
  assert.equal(fib(33), 3524578);
  assert.equal(slugify('Notify Item 11 1'), 'notify-item-11-1');
});
test('notify case 3', async () => {
  await sleep(900);
  assert.equal(fib(34), 5702887);
  assert.equal(slugify('Notify Item 11 2'), 'notify-item-11-2');
});
