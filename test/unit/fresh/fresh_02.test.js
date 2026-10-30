import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, sleep } from '../../../src/lib.js';

test('fresh 02 adds up', async () => {
  await sleep(300);
  assert.equal(sum([1, 2, 2]), 5);
});
