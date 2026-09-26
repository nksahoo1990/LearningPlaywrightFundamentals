import { chromium, Browser, BrowserContext, Page } from 'playwright';

import { test } from '@playwright/test';

test('Launching browser', async () => {

    let browser: Browser = await chromium.launch({ headless: false });
    console.log("Browser Launched", browser);

    let context: BrowserContext = await browser.newContext();
    console.log("Browser Context Created", context);

    let page: Page = await context.newPage();
    console.log("New Page Created", page);

    await page.goto('https://testautomationpractice.blogspot.com/');

    console.log("Page Title is: ", await page.title());
    console.log("Page URL is: ", await page.url());

    await page.close();
    await context.close();
    await browser.close();

});

