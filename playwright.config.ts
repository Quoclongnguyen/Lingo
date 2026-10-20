import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: "list",
  use: {
    baseURL: "http://localhost:5173",
    channel: "chrome",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
  },
  projects: [
    {
      name: "desktop-chrome",
      use: { viewport: { width: 1440, height: 900 } },
    },
    {
      name: "mobile-chrome",
      use: { viewport: { width: 390, height: 844 }, isMobile: true },
    },
  ],
});
