import { test } from 'node:test';
import assert from 'node:assert/strict';
import pg from 'pg';

test('postgres answers and keeps a row', async () => {
  const c = new pg.Client({ host: process.env.PGHOST || 'localhost', user: 'postgres', password: 'postgres', database: 'postgres' });
  await c.connect();
  await c.query('CREATE TABLE IF NOT EXISTS drill (id serial PRIMARY KEY, v text)');
  await c.query("INSERT INTO drill (v) VALUES ('x')");
  const r = await c.query('SELECT count(*)::int AS n FROM drill');
  assert.ok(r.rows[0].n >= 1);
  await c.end();
});
