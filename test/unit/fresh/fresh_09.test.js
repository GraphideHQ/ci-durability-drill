import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sum, sleep } from '../../../src/lib.js';

test('fresh 09 adds up', async () => {
  await sleep(300);
  assert.equal(sum([1, 2, 9]), 12);
});
