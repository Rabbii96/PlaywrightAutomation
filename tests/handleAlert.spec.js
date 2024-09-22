const { test, expect } = require('@playwright/test');

test.skip("Handle Alert", async ({ page }) => {

 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

 page.on('dialog',async (d) =>
{
    expect(d.type()).toContain("alert")
    expect(d.message()).toContain("I am a JS Alert")
    await d.accept()
})
   
await page.locator("//button[text()='Click for JS Alert']").click()

    
})

test("Handle Confrim Box", async ({ page }) => {

 await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

 page.on('dialog',async (dialogwindow) =>
{
    expect(dialogwindow.type()).toContain("confirm")
    expect(dialogwindow.message()).toContain("I am a JS Confirm")
    //await dialogwindow.dismiss()
    await dialogwindow.dismiss()
})
   
await page.locator("//button[text()='Click for JS Confirm']").click()

    
})


test("Handle Confirm Prompt", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");

    page.on('dialog', async (dialogwindow) => {
        expect(dialogwindow.type()).toContain("prompt");
        expect(dialogwindow.message()).toContain("I am a JS prompt");  // Case-sensitive correction

        await dialogwindow.accept("Rabbi");
        // You can use dialogwindow.dismiss() if you want to dismiss the prompt instead
    });

    // Using a more reliable selector
    await page.locator("//button[text()='Click for JS Prompt']").click();

    await page.waitForTimeout(4000);

});
