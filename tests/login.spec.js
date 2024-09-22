const {test,expect} = require("@playwright/test")

JSON.stringify(require("../testdata.json"))
test("Login to Application",async function({page}){



    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@id='email1']").fill("admin@gmail.com")



})
