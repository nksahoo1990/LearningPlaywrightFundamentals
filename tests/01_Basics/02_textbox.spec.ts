import { test, expect } from '@playwright/test';
test('Verify the textbox functionality', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/');
    // page.locator("//input[@id='user-name']").fill('standard_user');
    // page.locator("//input[@id='password']").fill('secret_sauce');
    // page.locator("//input[@id='login-button']").click();

    //await page.getByPlaceholder('Username').fill('standard_user');


    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page, "Correct title is displayed").toHaveTitle("Swag Labs");

    //await page.goto('https://app.vwo.com/#/login');
    //await page.getByRole('textbox', { name: 'Email address' }).fill('standard_user');
    //await page.locator("//input[@id='login-username']").fill('standard_user');
    //await page.getByPlaceholder('login:enterEmailID').fill('standard_user');

    // await page.getByRole('button', { name: 'Click for JS Alert' }).click();
    // await page.getByRole('button', { name: 'Click for JS Confirm' }).click();
    // await page.getByRole('button', { name: 'Click for JS Prompt' }).click();

});