const { test, expect } = require('@playwright/test');
const testdata = require('../testlogin.json');  


test.describe("Data Driven Login Test", function()
{

   for(const data of testdata)
   {
      test.describe(`Login with users ${data.id}`, function()
    {
         test('Login to application ', async ({page}) =>{
         
            await page.goto('https://freelance-learn-automation.vercel.app/login');


            await page.locator('#email1').fill(data.username); 
          
            await page.waitForTimeout(2000);
          
            await page.locator("//input[@id='password1']").fill(data.password)
          
            await page.waitForTimeout(2000);

         })
    })
   }



})

// test('Login to Application', async ({ page }) => { 
  
//   await page.goto('https://freelance-learn-automation.vercel.app/login');


//   await page.locator('#email1').fill(testdata.username); 

//   await page.waitForTimeout(2000);

//   await page.locator("//input[@id='password1']").fill(testdata.password)

//   await page.waitForTimeout(2000);

// });
 