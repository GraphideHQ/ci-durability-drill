import { test, expect } from '@playwright/test';

test('page 4 renders and counts', async ({ page }) => {
  await page.setContent(`<main><h1>Drill 4</h1><button id="b">add</button><output id="o">0</output>
    <script>document.getElementById('b').onclick = () => { const o = document.getElementById('o'); o.textContent = String(Number(o.textContent) + 1); };</script></main>`);
  await expect(page.locator('h1')).toHaveText('Drill 4');
  for (let k = 0; k < 7; k++) await page.click('#b');
  await expect(page.locator('#o')).toHaveText('7');
});
