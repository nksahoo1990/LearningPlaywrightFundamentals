import { test, expect } from '@playwright/test';

test.describe('Web Table Tests', () => {

    test('Verify that Helen Bennett is actually living in the UK', async ({ page }) => {

        await page.goto('https://awesomeqa.com/webtable.html');
        const row = page.locator("//table[@id='customers']/tbody/tr", { hasText: 'Helen Bennett' });
        const country = await row.locator('td').nth(2).textContent();
        console.log(`Helen Bennett is living in : ${country}`);

    })

    test('Verify all the texts present in a web table.', async ({ page }) => {

        await page.goto('https://awesomeqa.com/webtable.html');
        const tableRow = page.locator("//table[@id='customers']/tbody/tr");
        const rowCount = await tableRow.count();

        for (let i = 1; i < rowCount; i++) {
            const rowText = await tableRow.nth(i).allInnerTexts();
            console.log(`Row ${i + 1} text: ${rowText}`);
        }



    })


});