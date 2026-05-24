import { test, expect } from '@playwright/test';

test.describe('Drop Down Tests ', () => {

    test('Verify drop down functionality - Example 1', async ({ page }) => {

        await page.goto('https://the-internet.herokuapp.com/dropdown');

        // Using selectOption method to select the option from the drop down.

        // Using selectOption method to select the option from the drop down.
        //await page.selectOption("#dropdown", "Option 1");

        // Using locator to select the option from the drop down.
        await page.locator("#dropdown").selectOption("Option 2");

        await page.waitForTimeout(5000);
    })


    // this is advanced drop down wehere elemensts are not in select options tag. Here its Div tag. 
    // So we have to click on the drop down and then click on the option we want to select.
    test('Verify advanced drop down functionality', async ({ page }) => {

        await page.goto('https://app.thetestingacademy.com/playwright/tables/dropdowns');
        await page.locator("//div[@data-testid='dropdown-language']").click();
        await page.getByText('JavaScript', { exact: true }).click();
        await page.waitForTimeout(5000);
    })


});