import { test, expect } from '@playwright/test';

test('Create Booking', async ({ request }) => {

    const response = await request.get('https://gorest.in/public/v2/users');
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);

});