import { test, expect } from '@playwright/test';
test('Verify the fund transfer functionality of ttaBank', async ({ page }) => {

    // Login -> Fund Transfer -> Verify the transfered amount and balance update -> Logout

    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await page.getByRole('button', { name: 'Sign Up' }).click();
    await page.getByPlaceholder('John Doe').fill('Nitya Krushna Sahoo');
    await page.getByPlaceholder('you@example.com').fill('nksahoo@tta.com');
    await page.getByPlaceholder('••••••••').fill('test1234');
    await page.getByRole('button', { name: 'Create Account' }).click();
    await expect(page.locator("//h1[text()='Dashboard']"), 'User logged in and landed to the Dashboard page is successful.').toBeVisible();
    await page.getByRole('button', { name: 'Transfer Funds' }).click();
    await page.locator("//input[@type='number']").fill('5000');
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.locator("//span[text()='Amount']/following-sibling::span"), "Transefered amount is correct.").toHaveText('$5000.00');
    await page.getByRole('button', { name: 'Confirm Transfer' }).click();
    await page.getByRole('button', { name: 'Dashboard' }).click();
    await expect(page.locator("//p[text()='Total Balance']/following-sibling::h3"), "Amount Balance is updated correctly.").toHaveText('$45,000.00');
    await page.getByRole('button', { name: 'Sign Out' }).click();
});