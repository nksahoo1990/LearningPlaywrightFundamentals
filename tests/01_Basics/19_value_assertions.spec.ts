import { test, expect } from '@playwright/test';

test('Value Assertions Test', async ({ page }) => {

    expect(5 + 5).toBe(10); // Passes
    expect(5 + 5).not.toBe(11); // Passes
    expect(10).toBeGreaterThan(9); // Passes
    expect(false).toBeFalsy(); // Passes
    expect(true).toBeTruthy(); // Passes
    expect([1, 2, 3]).toEqual([1, 2, 3]);
    expect({ role: 'admin' }).toEqual({ role: 'admin' });

});