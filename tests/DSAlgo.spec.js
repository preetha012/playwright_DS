import { test, expect } from '@playwright/test';
const {POManager} = require('../pageobjects/POManager');

test('get_start_and_login_test', async ({ page }) => { 
 // await page.goto('https://dsportalapp.herokuapp.com/');
  const poManger = new POManager(page);
  const homepage = poManger.getHomePage();
  await homepage.goTo();
  await homepage.getStartedfn();
  await homepage.clickLogin_fn();
  const siginpage = poManger.getSiginPage();
  await siginpage.loginfn("Numpy@8913","test*123");
  expect( await homepage.sucessMsg()).toContain("You are logged in");
});
