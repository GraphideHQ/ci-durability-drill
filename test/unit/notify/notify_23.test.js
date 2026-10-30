import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(600);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Notify Item 23 0'), 'notify-item-23-0');
});
test('notify case 2', async () => {
  await sleep(400);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Notify Item 23 1'), 'notify-item-23-1');
});
test('notify case 3', async () => {
  await sleep(900);
  assert.equal(fib(31), 1346269);
  assert.equal(slugify('Notify Item 23 2'), 'notify-item-23-2');
});
