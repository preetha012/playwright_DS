const {test, expect} = require('@playwright/test')

test('browser ', async({browser})=>
{
    //chrome - plugin/cookies
   const context = await browser.newContext();
   const page = await  context.newPage();
   await page.goto("https:www.amazon.com");
   console.log("Current page title is ", await page.title())

});

test('Page test', async({page})=>
    {
        //chrome - plugin/cookies
       // const context = await browser.newContext();
       //const page = await  context.newPage();
       await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       const title = await page.title();
       console.log("Page tile is ",title);
       //await expect(page).toHaveTitle("Google");
       await page.locator("[name='username']").fill("Admin12");
       await page.locator("[name = 'password']").fill("admin123");
       await page.locator("[type='submit']").click();
       const errorMsg = await page.locator('.oxd-text.oxd-text--p.oxd-alert-content-text').textContent();
       console.log("error msg :- "+errorMsg);
       expect(errorMsg).toContain('Invalid');
    });

    test.only('Login and perform action test', async({page})=>{

        const userName =page.locator('input#username');
        const passwrd = page.locator('#password');
        const submitBtn = page.locator("[type='submit']");
        const dropDownBtn = page.locator("select.form-control");
        const cardLinkText = page.locator('.card-body a');
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log("Title is ", await page.title());
        expect( await page.title()).toContain('Rahul Shetty Academy');
        await userName.fill(""); // to clear the textarea
        await userName.fill("rahulshettyacademy");
        await passwrd.fill("learning");
        await dropDownBtn.selectOption("consult");
        page.pause();

        
        await submitBtn.click();

        console.log(await page.locator('.card-body a').first().textContent()); //first element text
        //  console.log(await page.locator('.card-body a').nth(1).textContent()); //second element text 
        await cardLinkText.first().waitFor(); //this is an alternate solution for wait
        await page.waitForLoadState('networkidle');
       const alllinkTexts = await cardLinkText.allTextContents();
       console.log(alllinkTexts);




    });