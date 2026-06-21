import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
test('Verify the Login functionality - Successful', async ({ page }) => {

    await allure.epic("Saucelab Login Tests");
    await allure.description("Verify that the login page works")
    await allure.feature("Essential features");
    await allure.story("Authentication");

    await page.goto('https://www.saucedemo.com/');
    await page.getByRole('textbox', { name: 'Username' }).fill('standard_user');
    await page.getByRole('textbox', { name: 'password' }).fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page, "Correct title is displayed").toHaveTitle("Swag Labs");

});