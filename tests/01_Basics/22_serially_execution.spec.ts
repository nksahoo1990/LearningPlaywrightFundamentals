import { test, expect } from '@playwright/test';

test.describe.serial('Verify serial test execution', () => {

    test('Step 1: Navigate to the SauceDemo website', async ({ page }) => {
        console.log('Step 1: Navigate to the SauceDemo website');
        await page.goto('https://www.saucedemo.com/');
    });

    test('Step 2: Navigate to the amazon website', async ({ page }) => {
        console.log('Step 2: Navigate to the amazon website');
        await page.goto('https://www.amazon.com/');
    });

    test('Step 3: Navigate to the google website', async ({ page }) => {
        console.log('Step 3: Navigate to the google website');
        await page.goto('https://www.google.com/');
    });


});