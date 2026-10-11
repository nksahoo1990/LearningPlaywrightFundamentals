import { test, expect } from '@playwright/test';

test.describe('Dashboard Feature Tests', () => {

    // Runs once before any test in this block starts
    test.beforeAll(async () => {
        console.log('Global setup: Connecting to mock backend or seed data...');
    });

    // Runs before every single test
    test.beforeEach(async ({ page }) => {
        // Navigate to the base URL and ensure session is active
        await page.goto('https://katalon-demo-cura.herokuapp.com/');
    });

    // Individual test 1
    test('should display make appointment button', async ({ page }) => {
        const makeAppointment = page.locator('#btn-make-appointment');
        await expect(makeAppointment).toBeVisible();
    });

    // Individual test 2
    test('should display login prompt when make appointment button is clicked', async ({ page }) => {
        await page.click('#btn-make-appointment');
        await expect(page.locator("//*[text()='Please login to make appointment.']")).toBeVisible();
    });

    // Runs after each test completes
    test.afterEach(async ({ page }) => {
        console.log(`Finished test on URL: ${page.url()}`);
    });

    // Runs once after all tests in this block have finished
    test.afterAll(async () => {
        console.log('Global cleanup complete.');
    });
});