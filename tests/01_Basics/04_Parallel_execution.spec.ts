import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {

    test('valid login', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
        await page.getByRole('textbox', { name: 'password' }).fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Invalid login one', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('hello_user');
        await page.getByRole('textbox', { name: 'password' }).fill('hekkp_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    });

    test('Invalid login two', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.getByRole('textbox', { name: 'Username' }).fill('hel11o_user');
        await page.getByRole('textbox', { name: 'password' }).fill('he33p_sauce');
        await page.getByRole('button', { name: 'Login' }).click();
    });

});