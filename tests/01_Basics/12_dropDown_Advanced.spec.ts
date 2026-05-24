import { test, expect } from '@playwright/test';

test.describe('Drop Down Tests ', () => {

    test('Verify advanced drop down functionality - Example 1', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/tables/select-boxes');

        // selecting single option from the drop down
        await page.locator("#rs-single").click();
        await page.getByText('Cypress').click();
        await page.waitForTimeout(2000);

        // selecting multiple options from the drop down
        await page.locator("#rs-multi").click();
        await page.getByText('Pytest', { exact: true }).click();
        await page.getByText('Jest', { exact: true }).click();
        await page.keyboard.press("Escape");
        await page.waitForTimeout(2000);

        // this handles auto suggest drop down where we have to type the value and then select the option from the drop down.
        await page.locator("#rs-async").click();
        await page.getByTestId('rs-async-input').fill('pun');
        await expect(page.getByTestId('rs-async-menu')).toContainText('Pune');
        await page.getByRole('option', { name: 'Pune' }).first().click();
        await page.waitForTimeout(2000);

    })
});