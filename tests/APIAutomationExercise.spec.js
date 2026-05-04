import { test, request, expect } from "@playwright/test"

test('login via API', async ({ request, context, page }) => {

    // Step 1: get csrf token
    await request.get('https://automationexercise.com/login');

    const storageState = await request.storageState();
    const csrfToken = storageState.cookies.find(c => c.name === 'csrftoken')?.value;

    // Step 2: login
   const response =  await request.post('https://automationexercise.com/login', {
        form: {
            csrfmiddlewaretoken: csrfToken,
            email: 'akshaya122@gmail.com',
            password: '12345678'
        }
    });

    // Step 3: transfer cookies to browser
    await context.addCookies((await request.storageState()).cookies);

    // Step 4: open site (already logged in)
    await page.goto('https://automationexercise.com');
    // 👇 Logs
    
    console.log('Status:', response.status());
    console.log('Headers:', response.headers());
    console.log('URL:', response.url());

});
