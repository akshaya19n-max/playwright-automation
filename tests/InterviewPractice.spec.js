// write a code to login to gmail app, if there is any failure , then take screenshot 
import test from '@playwright/test';

test('gmail login', async ({ page }) => {

    await page.goto('https://www.gmail.com');

    const username = await page.getByRole('textbox', { name: 'Email or phone' }).fill("akshaya654@gmail.com");
    try {
        await page.getByRole('button', { name: 'Next' }).click();
        await page.getByText('Enter your password').fill("akshaya");
    } catch (error) {

        await page.screenshot({ path: 'err.png' });
        throw error;
    }

});






