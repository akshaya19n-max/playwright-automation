import { test } from "@playwright/test"
//to print all the rows that contains "Smith"

test("table data fetch", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables");
    const rows = page.locator('tr').filter({ hasText: 'Smith' });
    console.log(await rows.allTextContents());

});

// test to print due amount of Smith 
test("Due amount", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    const row = page.locator('tr').filter({ hasText: 'Smith' });

    const dueAmount = await row.locator('td').nth(3).innerText();

    console.log(dueAmount);

});

// print website of Conway

test("web address", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables");

    //row containing conway
    const rowConway = await page.locator('tr').filter({ hasText: 'Conway' });

    const website = await rowConway.locator('td').nth(4).innerText();

    console.log(`Conway's website is ${website}`);
});

//test to add the Due column 

test("All dues added", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/tables");

    const rows = await page.locator('table tbody tr');
    const count = await rows.count();
    let total = 0;

    for (let i = 0; i < count; i++) {
        await rows.first().waitFor();

        //fetch the 3rd element from each row 
        const dueText = await rows.nth(i).locator("td").nth(3).innerText();

        //convert string to number and remove $ symbol
        const due = await parseFloat(dueText.replace("$", ""));

        total += due;
    }
    console.log(total);
});

//display all the names in the table 

test("All names ", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/tables");

    //all the rows
    const rows = page.locator('table tbody tr');
    const count = await rows.count();
    for (let i = 0; i < count; i++) {

        const lastName = await rows.nth(i).locator('td').nth(0).innerText();
        const firstName = await rows.nth(i).locator('td').nth(1).innerText();
        console.log(lastName + " " + firstName);

    }

});