import { test, expect } from '@playwright/test';



test('Verify all the texts present in a web table.', async ({ page }) => {

    await page.goto('https://awesomeqa.com/webtable.html');
    const tableRow = page.locator("//table[@id='customers']/tbody/tr");
    const rowCount = await tableRow.count();

    for (let i = 1; i < rowCount; i++) {
        const text = await tableRow.nth(i).innerText();
        if (text.includes('Microsoft')) {
            console.log(`Row is : ${i} and text is : ${text}`);
        }
    }
});




