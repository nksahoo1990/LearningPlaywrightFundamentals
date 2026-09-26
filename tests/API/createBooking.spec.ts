import { test, expect } from '@playwright/test';

/*POST Method to create a new booking

NOTE:
request.post(...)
sends an HTTP POST request.

data:
is the request body.

response.status()
returns
200

await response.json()
converts JSON response into an object. */


test('Create Booking', async ({ request }) => {

    const response = await request.post(
        'https://restful-booker.herokuapp.com/booking',
        {
            data: {
                firstname: "Nitya",
                lastname: "Krushna",
                totalprice: 250,
                depositpaid: true,
                bookingdates: {
                    checkin: "2026-07-10",
                    checkout: "2026-07-20"
                },
                additionalneeds: "Breakfast"
            }
        });

    expect(response.status(), 'Booking Created Successfully.').toBe(200);

    const responseBody = await response.json();

    console.log(responseBody);

    expect(responseBody.booking.firstname).toBe("Nitya");
    expect(responseBody.booking.lastname).toBe("Krushna");

    // GET call to verify the booking was created successfully

    const createBody = await response.json();

    const bookingId = createBody.bookingid;

    console.log("Booking Id:", bookingId);

    const getResponse = await request.get(
        `https://restful-booker.herokuapp.com/booking/${bookingId}`
    );

    expect(getResponse.status()).toBe(200);

    const booking = await getResponse.json();

    expect(booking.firstname).toBe("Nitya");
    expect(booking.lastname).toBe("Krushna");
    expect(booking.totalprice).toBe(250);
    expect(booking.depositpaid).toBe(true);


});