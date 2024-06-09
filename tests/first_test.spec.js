// @ts-check

const {test,expect} = require('@playwright/test')
//const {hello,helloworld} = require('./demo/print_hello')
//import {hello,helloworld} from './demo/hello';

//console.log(hello());
//console.log(helloworld());

test('First test', async ({ page }) => {
    await page.goto('https://www.google.com');
  //  expect(await page.title()).toBe('Google');
   await expect(page).toHaveTitle('Google');
   await page.getByLabel('Search').fill('Playwright');





 });

 