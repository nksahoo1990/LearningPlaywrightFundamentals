import { test, expect } from '@playwright/test';

test('Scrolling Test - Verify Scrolling Functionality', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/widgets/scroll');
    // Add your scrolling test logic here

    await page.getByTestId('cta-button').scrollIntoViewIfNeeded();

    await page.evaluate(() => window.scrollTo(0, 0));

    await page.evaluate(() => window.scrollTo(0, 1000));
});