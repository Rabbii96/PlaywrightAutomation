const { test, expect } = require('@playwright/test')
const LoginPage = require("../pages/loginpage.js")

test('Login to Application Using Pom', async ({ page }) => { 
  
  await page.goto('https://freelance-learn-automation.vercel.app/login')

  const loginpage =new LoginPage(page)

  await loginpage.loginToApplication()


})