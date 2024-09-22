const { test, expect } = require('@playwright/test');

test("Handle Autosuggestion in Playwright keyboard", async ({ page }) => {
  // Navigate to Google
  await page.goto('https://www.google.com');

  // Type into the search box
  await page.locator("textarea[name='q']").type('Playwright Automation');

  await page.waitForTimeout(3000)

  await page.waitForSelector("//li[@role='presentation']")

  await page.keyboard.press("ArrowDown")

  await page.waitForTimeout(1000)

   await page.keyboard.press("ArrowDown")

   await page.waitForTimeout(1000)

   await page.keyboard.press("Enter")

   await page.waitForTimeout(3000)


});

test.only("Verify Applocation Title Using Loop", async ({ page }) => {
   
   await page.goto('https://www.google.com');

   await page.locator("textarea[name='q']").type('Playwright Automation');

   await page.waitForSelector("//li[@role='presentation']")

   const element = await page.$$("//li[@role='presentation']")

   for(let i =0; i<element.length;i++)
   {
      const text = await element[i].textContent() 

      if(text.includes('Playwright'))
      {
        await element[i].click()
        break
      }
   }
      

})
