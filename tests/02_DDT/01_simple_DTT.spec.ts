import { test, expect } from '@playwright/test';

test.describe.serial('Data-Driven Testing (DDT) - Simple Test', () => {

    const loginData = [
        {
            username: 'standard_user',
            password: 'secret_sauce',
            expectedTitle: 'Swag Labs'
        },

        {
            username: 'locked_user',
            password: 'secret_sauce',
            expectedTitle: 'Swag Labs'
        },

        {
            username: 'visual_user',
            password: 'secret_sauce',
            expectedTitle: 'Swag Labs'
        },
    ]

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