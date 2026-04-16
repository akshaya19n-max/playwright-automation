import { test, expect, request } from '@playwright/test';
import { APIAsnmt } from './utils/APIAsnmt';

const loginInPayload = { email: "rahulshetty991@gmail.com", password: "Rahulshetty@123" };
const loginInPayload_yahoo = { email: "rahulshetty991@gmail.com", password: "Rahulshetty@345" };

let token;

test.beforeAll('login', async () => {

    const apiContext = await request.newContext();
    const api = new APIAsnmt(apiContext, loginInPayload_yahoo);
    console.log('this is token');
    token = await api.getToken();


});

test('assignment', async ({ page }) => {

    await page.addInitScript(value => { window.localStorage.setItem('eventhub_token', value) }, token);

    await page.goto("https://eventhub.rahulshettyacademy.com");
    await page.route("https://api.eventhub.rahulshettyacademy.com/api/events*", async route => {
        await route.fulfill(
            {
                status: 200,
                contentType: "application/json",
                body: JSON.stringify(SIX_EVENTS_RESPONSE),

            }
        );
    });
    //events tab is clicked 
    await page.locator("#nav-events").click();

    await page.pause();

});
