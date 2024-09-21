const { test, expect } = require('@playwright/test');

test("Handle Autosuggestion in Playwright", async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Type into the search box
  await page.locator("textarea[name='q']").type('Fazle Rabbii');
});
