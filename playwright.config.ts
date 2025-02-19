import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    baseURL: process.env.BASE_URL || 'https://buggy.justtestit.org',
    headless: true, // Set to false if you want to see the browser in action
    // You can add more Playwright options here if needed
  },
});
