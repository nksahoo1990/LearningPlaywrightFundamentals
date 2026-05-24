import { test, expect } from '@playwright/test';
import data from './userTestData.json';

test("Verify the retrieval of user credentials from JSON file", async ({ page }) => {
    // Step 1: Navigate to the Cura Healthcare Service website
    await page.goto(data.url);
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    expect(page.getByRole('button', { name: 'Login' }), 'User landed to the login page is successful.').toBeVisible();

    // Step 2: Log in with valid credentials
    await page.getByLabel('Username').fill(data.username);
    await page.getByLabel('Password').fill(data.password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//h2[(text()='Make Appointment')]"), 'User logged in and landed to the make appointment page is successful.').toBeVisible();
});