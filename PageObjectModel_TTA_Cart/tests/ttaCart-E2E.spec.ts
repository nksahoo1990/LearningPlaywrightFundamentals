import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/TTACartLoginPage';
import { TTAcartinventoryPage } from '../pages/TTACartInventoryPage';
import { TtacartCheckoutPage } from '../pages/TTACartCHeckoutPage';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Very Important//
//********************** */
// Check the playwright.config.ts fir the testDir when running the tests.
// The trstDir should be "testDir: './PageObjectModel_TTA_Cart/tests',"
// Whenwe run other tests the testdir should be "testDir: './tests',"
// Then run 'npx playwright test ttaCart-E2E.spec.ts --headed'

dotenv.config({ path: path.resolve(__dirname, '../.env') });

function getRequiredEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`);
    }
    return value;
}

const ttacartUsername = getRequiredEnv('TTACART_USERNAME');
const ttacartPassword = getRequiredEnv('TTACART_PASSWORD');

test.describe('TTA Cart Autoamtion', () => {

    test('Login with valid credentials, add to cart & checkout', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login(ttacartUsername, ttacartPassword);
        const ttacartinventorypageTs = new TTAcartinventoryPage(page);
        await ttacartinventorypageTs.addToInventory();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/cart');
        await ttacartinventorypageTs.checkoutCart();
        const ttacartCheckout = new TtacartCheckoutPage(page);
        await ttacartCheckout.fillCheckoutPage();
        await expect(page).toHaveURL('https://app.thetestingacademy.com/playwright/ttacart/checkout-step-two');

    });
});