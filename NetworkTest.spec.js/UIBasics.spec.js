const { test, expect } = require('@playwright/test');

test('sample test case', async ({ page }) => {


    const username = page.locator('#username');
    const signinButton = page.locator('#signInBtn');
    const items = page.locator('.card-body a');

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    await page.locator('#username').fill('rahulshettyacadem');
    await page.locator('#password').fill('Learning@830$3mK2');
    await signinButton.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect');

    await username.fill('');
    await username.fill('rahulshettyacademy');

    await signinButton.click();

    //for first element
    // console.log(await items.nth(0).textContent());

    //for first element
    //console.log(await page.locator('.card-body a').first().textContent());

    //for last element
    // console.log(await items.last().textContent());

    //await items.first().waitFor();
    await page.waitForLoadState('networkidle');
    const allItems = await items.allTextContents();

    console.log(allItems);

});

test('@Child windows hadl', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");

    const [newPage] = await Promise.all(
        [
            context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
            documentLink.click(),

        ])//new page is opened


    const text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain = arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());

});

test.only('practice test case', async ({ page }) => {


    await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");
    /*
    const register = page.locator(".text-reset");
    await register.click();
    await page.locator("#firstName").fill('johnnn');
    await page.locator('#lastName').fill('sinaaa');
    await page.locator('#userEmail').fill('john787@gmail.com');
    await page.locator('#userMobile').fill('9095670400');
    const occupation = page.locator('select[formcontrolname="occupation"]');
    occupation.selectOption('3: Engineer');
    await page.locator('input[type="radio"][value="Male"]').check();
    await page.locator('#userPassword').fill('Akshayaaa@1');
    await page.locator('#confirmPassword').fill('Akshayaaa@1');
    await page.locator('input[type="checkbox"]').check();
    await page.locator('input[value="Register"]').click();
    await expect(page.getByText('Account Created Successfully')).toBeVisible();

    */

    await page.locator('#userEmail').fill('john787@gmail.com');
    await page.locator('#userPassword').fill('Akshayaaa@1');
    await page.locator('#login').click();

    const itemName = 'ZARA COAT 3';

    await page.locator(`//b[text()="${itemName}"]/../following-sibling::button`).nth(1).click();
    await page.locator('//button[@routerlink="/dashboard/cart"]').click();
    await page.locator('button:has-text("Checkout")').click();

    await expect(page.locator("//div[@class='item__title']")).toContainText(itemName);
    await expect(page.locator("//div[@class='item__quantity']")).toContainText(' Quantity: 1 ');
    await page.locator('input[class="input txt"]').nth(0).fill('456');
    await page.locator('input[class="input txt"]').nth(1).fill('John Sina');
    await page.getByPlaceholder('Select Country').fill('india');
    await page.locator('.fa-search').nth(1).click();
    // await page.locator(':text-is("India")').click();
    await page.locator('[name="coupon"]').fill("rahulshettyacademy");
    await page.locator("button[type='submit']").click();
    await page.locator('p:has-text("* Coupon Applied")');
    await page.locator('.action__submit').click();
    const oederID = await page.locator('label.ng-star-inserted').textContent();
    console.log(oederID);



});

