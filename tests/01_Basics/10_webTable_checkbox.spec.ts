import { test, expect } from '@playwright/test';

test('Basic Web Test - Verify Page Title', async ({ page }) => {

    await page.goto('https://app.thetestingacademy.com/playwright/webtable');

    // clicking on the checkbox of Rohan Mehta
    await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td").first().click();
    await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td").nth(0).click();
    await page.waitForTimeout(5000);

});