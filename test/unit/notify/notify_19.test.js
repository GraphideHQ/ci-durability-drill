import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(400);
  assert.equal(fib(25), 75025);
  assert.equal(slugify('Notify Item 19 0'), 'notify-item-19-0');
});
test('notify case 2', async () => {
  await sleep(600);
  assert.equal(fib(26), 121393);
  assert.equal(slugify('Notify Item 19 1'), 'notify-item-19-1');
});
test('notify case 3', async () => {
  await sleep(250);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Notify Item 19 2'), 'notify-item-19-2');
});
