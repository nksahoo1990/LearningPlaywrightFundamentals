import { test, expect } from '@playwright/test';

test('Verify breaking of test.step into multiple steps.', async ({ page }) => {


    test.step('Step 1: Navigate to the SauceDemo website', async () => {
        console.log('Step 1: Navigate to the SauceDemo website');
        await page.goto('https://www.saucedemo.com/');
    });

    test.step('Step 2: Perform login with valid credentials', async () => {
        console.log('Step 2: Perform login with valid credentials');
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveTitle('Swag Labs');
    });

    test.step('Step 3: Verify Add to the cart button displayed', async () => {
        console.log('Step 3: Verify Add to the cart button displayed');
        await page.waitForLoadState();
        await expect(page.locator('#shopping_cart_container')).toBeVisible();
    });

});