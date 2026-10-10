import { test, expect } from '@playwright/test';

test('Step 1: Navigate to the SauceDemo website  @smoke ', async ({ page }) => {
    console.log('Step 1: Navigate to the SauceDemo website');
    await page.goto('https://www.saucedemo.com/');
});

test('Step 2: Navigate to the amazon website  @regression ', async ({ page }) => {
    console.log('Step 2: Navigate to the amazon website');
    await page.goto('https://www.amazon.com/');
});

test('Step 3: Navigate to the google website  @smoke ', async ({ page }) => {
    console.log('Step 3: Navigate to the google website');
    await page.goto('https://www.google.com/');
});

test('Step 4: Navigate to the facebook website  @regression ', async ({ page }) => {
    console.log('Step 4: Navigate to the facebook website');
    await page.goto('https://www.facebook.com/');
});


// In terminal run below command to run smoke tests only
// npx playwright test --grep '@smoke'

// In terminal run below command to run regression tests only
// npx playwright test --grep '@regression'