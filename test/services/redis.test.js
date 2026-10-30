import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createClient } from 'redis';

test('redis keeps a key', async () => {
  const c = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
  await c.connect();
  await c.set('drill', 'ok');
  assert.equal(await c.get('drill'), 'ok');
  await c.quit();
});
