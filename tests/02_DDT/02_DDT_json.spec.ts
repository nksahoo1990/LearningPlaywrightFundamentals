import { test, expect } from '@playwright/test';

import loginData from './loginData.json';

test.describe.serial('Data-Driven Testing (DDT) - Simple Test', () => {

    for (const data of loginData) {

        test(`Login with Username: ${data.username}`, async ({ page }) => {
            await page.goto('https://www.saucedemo.com/');
            await page.locator('#user-name').fill(data.username);
            await page.locator('#password').fill(data.password);
            await page.locator('#login-button').click();
            await expect(page).toHaveTitle(data.expectedTitle);
        });
    }
});