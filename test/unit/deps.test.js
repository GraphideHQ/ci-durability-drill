import { test } from 'node:test';
import assert from 'node:assert/strict';
import _ from 'lodash';
import dayjs from 'dayjs';

test('the new dependencies load', () => {
  assert.deepEqual(_.chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
  assert.equal(dayjs('2026-10-30').format('YYYY'), '2026');
});
