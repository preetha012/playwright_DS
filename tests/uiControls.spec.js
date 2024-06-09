const {test, expect} = require('@playwright/test')

test.only('dropDown radio test', async({page})=>{

    const userName =page.locator('input#username');
    const passwrd = page.locator('#password');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log("Title is ", await page.title());
    expect( await page.title()).toContain('Rahul Shetty Academy');
    await userName.fill(""); // to clear the textarea
    await userName.fill("rahulshettyacademy");
    await passwrd.fill("learning");
    await page.locator("[type='submit']").click();


});