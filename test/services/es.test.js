import { test } from 'node:test';
import assert from 'node:assert/strict';

test('elasticsearch indexes and finds a document', async () => {
  const es = process.env.ES_URL || 'http://localhost:9200';
  let r = await fetch(`${es}/drill/_doc/1?refresh=true`, { method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ v: 'drill' }) });
  assert.ok(r.ok, `index: ${r.status}`);
  r = await fetch(`${es}/drill/_doc/1`);
  assert.equal((await r.json())._source.v, 'drill');
});
