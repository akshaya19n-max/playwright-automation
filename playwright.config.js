// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './',
  timeout: 90 * 1000,
  expect: {
    timeout: 90 * 1000
  },

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure', //off,on
  },

  projects: [
    {
      name: 'chome',
      use: {
        browserName: 'chromium'
      }
    }
  ]
});

