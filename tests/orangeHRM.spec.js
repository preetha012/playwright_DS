import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'My Info' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Amal');
  await page.getByPlaceholder('Middle Name').click();
  await page.getByPlaceholder('Middle Name').fill('Java');
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().click();
  await page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').first().fill('1237');
  await page.locator('div').filter({ hasText: /^License Expiry Date$/ }).first().click();
  await page.locator('li').filter({ hasText: '2023' }).locator('i').click();
  await page.getByText('2024', { exact: true }).click();
  await page.getByText('24', { exact: true }).click();
  await page.locator('div').filter({ hasText: /^Date of BirthGenderMaleFemale$/ }).locator('i').click();
  await page.getByRole('button', { name: '' }).nth(1).click({
    clickCount: 4
  });
  await page.locator('li').filter({ hasText: 'March' }).locator('i').click({
    clickCount: 7
  });
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(1).click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).locator('i').nth(2).click();
  await page.getByRole('option', { name: 'Single' }).click();
  await page.locator('label').filter({ hasText: 'Female' }).locator('span').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
});