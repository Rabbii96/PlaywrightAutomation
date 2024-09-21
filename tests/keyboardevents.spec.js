const { test, expect } = require('@playwright/test')

test("Keyboard Events In playwright", async function({page}) 
 {

       await page.goto("https://www.google.com");

       await page.locator("textarea[name='q']").type("Fazle Rabbi")

    //    await page.keyboard.press("Enter")

    //    await page.waitForTimeout(2000)

         await page.keyboard.press("Meta+A")

         await page.waitForTimeout(2000)

         await page.keyboard.press("Meta+C")

         await page.waitForTimeout(2000)

         await page.keyboard.press("Backspace")

         await page.waitForTimeout(2000)

         await page.keyboard.press("Meta+V")

         await page.waitForTimeout(2000)


 })