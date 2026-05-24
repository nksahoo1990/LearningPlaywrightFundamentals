import { test, expect } from '@playwright/test';

test('Verification of number of links', async ({ page }) => {
    await page.goto('https://www.google.com/');

    // await page.locator("//div[@id='SIvCob']/a").count().then(count => {
    //     console.log(`Number of links found: ${count}`);
    // });

    const count1 = await page.locator("//div[@id='SIvCob']/a").count();
    console.log("Number of links found:", count1);

    //const linksAvailable: string[] = await page.locator("//div[@id='SIvCob']/a").allInnerTexts();
    const linksAvailable: string[] = await page.locator("//div[@id='SIvCob']/a").allTextContents();
    console.log("Links available:", linksAvailable);
    console.log("Number of links found:", linksAvailable.length);

    for (const link of linksAvailable) {
        if (link.includes('हिन्दी')) {
            await page.locator("//div[@id='SIvCob']/a").nth(linksAvailable.indexOf(link)).click();
            break;
        }
    }

    const allLinks = await page.locator("//div[@id='SIvCob']/a").all();
    //console.log("All links:", allLinks);

    for (const link1 of allLinks) {

        console.log("Link text:", await link1.textContent());
    }

    await page.waitForTimeout(5000);

});

