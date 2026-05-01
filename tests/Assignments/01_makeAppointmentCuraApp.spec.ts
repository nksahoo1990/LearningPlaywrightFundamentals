import { test, expect } from '@playwright/test';

test("Verify the end to end functionality of Cura Heathcare Service", async ({ page }) => {

    // Step 1: Navigate to the Cura Healthcare Service website
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    expect(page.getByRole('button', { name: 'Login' }), 'User landed to the login page is successful.').toBeVisible();

    // Step 2: Log in with valid credentials
    await page.getByLabel('Username').fill('John Doe');
    await page.getByLabel('Password').fill('ThisIsNotAPassword');
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.locator("//h2[(text()='Make Appointment')]"), 'User logged in and landed to the make appointment page is successful.').toBeVisible();

    // Step 3: Fill out the appointment form
    await page.getByRole('combobox', { name: 'Facility' }).selectOption('Hongkong CURA Healthcare Center');
    await expect(page.getByRole('checkbox', { name: 'Apply for hospital readmission' }), 'Verification of Apply for hospital readmission checkbox is unchecked by default').not.toBeChecked();
    await page.getByRole('checkbox', { name: 'Apply for hospital readmission' }).check();
    await page.getByRole('radio', { name: 'Medicaid' }).check();
    await page.getByLabel('Visit Date (Required)').type('21/05/2026');
    await page.getByLabel('Comment').fill('Test Comment : Create an appointment.');
    await page.getByRole('button', { name: 'Book Appointment' }).click();
    const confirmationMessage = await page.locator("//*[@class='lead']").textContent();
    expect(confirmationMessage, 'Verification of appointment confirmation message is successful').toContain('Please be informed that your appointment has been booked as following:');

    // Log out from the application
    await page.locator("//a[@id='menu-toggle']").click();
    await page.getByRole('link', { name: 'Logout' }).click();
    await expect(page, 'User is logged out successfully.').toHaveURL("https://katalon-demo-cura.herokuapp.com/");
})