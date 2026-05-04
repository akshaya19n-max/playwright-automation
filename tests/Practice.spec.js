import { test, expect } from "@playwright/test"
import testData from '../testData.json' assert { type: 'json' };
// Practice from www.automation.com

testData.forEach((data) => {


    test(`register user ${data.name} `, async ({ page }) => {

        await page.goto("https://automationexercise.com/");
        await page.getByRole('link', { name: 'Signup / Login' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill(data.name);
        await page.getByRole('textbox', { name: 'Email Address' }).nth(1).fill(data.email);
        await page.getByRole('button', { name: 'Signup' }).click();

        await expect(page.getByText('Enter Account Information')).toBeVisible();
        await page.getByRole('radio', { name: 'Mr.' }).nth(0);
        await page.getByRole('textbox', { name: 'Password *' }).fill("abc")
        await page.locator('#days').selectOption('2');
        await page.locator('#months').selectOption('April');
        await page.locator('#years').selectOption('2006')
        await page.locator('#newsletter').check();
        await page.locator('#optin').check();
        await page.getByRole('textbox', { name: 'First name *' }).fill(data.firstName);
        await page.getByLabel('Last name *').fill(data.lastName);
        await page.getByLabel('Address *').fill(data.address);
        await page.getByRole('combobox', { name: 'Country *' }).selectOption("India");
        await page.getByLabel("State *").fill(data.state);
        await page.getByLabel("City *").fill(data.city);
        await page.locator('#zipcode').fill(data.zipcode);
        await page.getByLabel("Mobile Number *").fill(data.mobile);
        await page.getByRole('button', { name: 'Create Account' }).click();

        await expect(page.getByText('Account Created!')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();

        await expect(page.locator(`a:has-text("Logged in as ${data.name}")`)).toBeVisible();
        await page.getByRole('link', { name: 'Delete Account' }).click();
        await expect(page.getByText("Account Deleted!")).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();

    })

});


