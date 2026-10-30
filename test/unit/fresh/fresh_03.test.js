import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, sleep } from '../../../src/lib.js';

test('fresh 03 adds up', async () => {
  await sleep(300);
  assert.equal(sum([1, 2, 3]), 6);
});
