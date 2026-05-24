import { test, expect } from '@playwright/test';

test('Verification of number of links', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');


    page.on("dialog", async (dialog) => {
        // expect(dialog.type()).toContain("alert");
        //expect(dialog.message()).toContain("I am an alert box!");
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.locator("//button[@id='alertBtn']").click();
});

