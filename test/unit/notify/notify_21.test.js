import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fib, slugify, sleep } from '../../../src/lib.js';

test('notify case 1', async () => {
  await sleep(250);
  assert.equal(fib(27), 196418);
  assert.equal(slugify('Notify Item 21 0'), 'notify-item-21-0');
});
test('notify case 2', async () => {
  await sleep(150);
  assert.equal(fib(28), 317811);
  assert.equal(slugify('Notify Item 21 1'), 'notify-item-21-1');
});
test('notify case 3', async () => {
  await sleep(250);
  assert.equal(fib(29), 514229);
  assert.equal(slugify('Notify Item 21 2'), 'notify-item-21-2');
});
