import { test, expect } from "@playwright/test"

test("Reqres api testing", async ({ request }) => {

    const response = await request.get('https://automationexercise.com/api/productsList');

    expect(response.status()).toBe(200);

    const body = await response.json();

    console.log(body);
    // expect(body.data.id).toBe(2);

})