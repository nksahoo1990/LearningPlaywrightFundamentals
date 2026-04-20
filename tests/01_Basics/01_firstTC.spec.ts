import { test, expect } from '@playwright/test';

test('Verify the title of app.vwo.com', async ({ page }) => {
    // page is passed as an augument and it is used to perform actions on the page like click, type, etc. It came from @playwright/test library.
    await page.goto('https://app.vwo.com/');
    await expect(page).toHaveTitle("Login - VWO");

});