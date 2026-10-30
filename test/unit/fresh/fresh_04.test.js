import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, sleep } from '../../../src/lib.js';

test('fresh 04 adds up', async () => {
  await sleep(300);
  assert.equal(sum([1, 2, 4]), 7);
});
