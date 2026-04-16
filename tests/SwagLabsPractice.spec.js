import { test } from '@playwright/test';

import LoginPageSwag from '../pages/LoginPageSwag';
import ProductPage from '../pages/ProductPage';


test("Login Page", async ({ page }) => {

    await page.goto("https://www.saucedemo.com/");

    const loginForUser = new LoginPageSwag(page);
    const ProducttoCart = new ProductPage(page);

    loginForUser.login("standard_user", "secret_sauce");

    page.on("dialog", async (dialog) => {
        await dialog.accept();
    });

    ProducttoCart.addItemsTocart(["backpack", "bike-light"]);

});