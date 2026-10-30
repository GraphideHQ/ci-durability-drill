import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(250);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Notify Item 7 0'), 'notify-item-7-0');
});
test('notify case 2', async () => {
  await sleep(900);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Notify Item 7 1'), 'notify-item-7-1');
});
test('notify case 3', async () => {
  await sleep(250);
  assert.equal(fib(30), 832040);
  assert.equal(slugify('Notify Item 7 2'), 'notify-item-7-2');
});
