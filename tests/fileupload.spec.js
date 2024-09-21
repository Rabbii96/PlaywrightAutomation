const { test, expect } = require('@playwright/test')

test("Verify file Upload", async function({page}) 
 {
     await page.goto("https://the-internet.herokuapp.com/upload")
     await page.waitForTimeout(2000)

     await page.locator("#file-upload").setInputFiles("C:\\Users\\fazla\\Downloads\\pic.png")
     await page.waitForTimeout(2000)

     await page.locator("#file-submit").click()
     await page.waitForTimeout(2000)

     await expect(await page.locator("//h3")).toHaveText("File Uploaded!")
 })