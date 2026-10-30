import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  workers: 2,
  reporter: 'list',
  projects: [{ name: 'firefox', use: { ...devices['Desktop Firefox'] } }],
});
