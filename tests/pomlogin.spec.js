const { test, expect } = require('@playwright/test')
const LoginPage = require("../pages/loginpage.js")
const Homepage = require("../pages/homepage.js")


test('Login to Application Using Pom', async ({ page }) => { 
  
  await page.goto('https://freelance-learn-automation.vercel.app/login')

  const loginpage =new LoginPage(page)

  await loginpage.loginToApplication("admin@email.com","admin@123")

  const homePage = new Homepage(page)

  await homePage.verifyManageOption()

  await homePage.logoutFromApplication()

  await loginpage.verifySignIn()


})