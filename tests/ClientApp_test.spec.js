const {test, expect} = require('@playwright/test')

test('Client app login' , async({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    await page.locator('input#userEmail').fill("");
    await page.locator('input#userEmail').fill("ammu198913@gmail.com");
    await page.locator('input#userPassword').fill("Study*89");
    await page.locator('#login').click();




});