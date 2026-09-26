import { test, expect } from '@playwright/test';

test('Verification of nhandling of alerts', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');


    page.on("dialog", async (dialog) => {
        // expect(dialog.type()).toContain("alert");
        //expect(dialog.message()).toContain("I am an alert box!");
        console.log(dialog.message());
        console.log(dialog.type());
        //await dialog.accept();
        //await dialog.dismiss();
        await dialog.accept("Nitya Krushna Sahoo");
    });
    //await page.locator("//button[@id='alertBtn']").click();
    //await page.locator('#confirmBtn').click();
    await page.locator('#promptBtn').click();

});

