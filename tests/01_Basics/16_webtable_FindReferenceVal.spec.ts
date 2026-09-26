import { test, expect } from '@playwright/test';

test('Verify webtable values present', async ({ page }) => {

    await page.goto("https://vinothqaacademy.com/webtable/");

    const rows = page.locator('#myTable tbody tr').filter({
        hasText: 'Jane Smith'
    });

    await expect(rows.locator('td').nth(4)).toHaveText('Manchester');
    await rows.locator('td input').first().check();
});