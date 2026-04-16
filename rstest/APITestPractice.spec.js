import { test, expect } from '@playwright/test';

test("API test", async ({ request }) => {


    const API_response = await request.get("https://reqres.in/api/my-app/collections/todos/records");

    expect(API_response.status()).toBe(200);
    const text = (await response).text();

    console.log(text);


})

/*
How do you handle query parameters or headers in a Playwright API request?
Explain the difference between request.get(), request.post(), and page.request.

*/


//How do you make a GET request using Playwright? Can you show an example?


test("Api Get call", async ({ request }) => {

    const response = await request.get("endpoint url");

});


//How do you make a POST request with a JSON payload in Playwright?

test("Post API request", async ({ request }) => {

    const response = await request.post("endpoint url", {
        //json payload
        data: {
            "name": "akshaya",
            "age": "30"
        }

    })

    const responseBody = response.json();

    console.log(responseBody);

});

//How do you assert the response status code of an API request in Playwright?

//using     expect(response.status()).toBe(200);


test("API headers request", async ({ request }) => {

    const response = await request.post("endpoint url", {
        //json payload
        data: {
            "name": "akshaya",
            "age": "30"
        },
        headers: {

            'Authorization': 'Bearer your_token',
            'Accept': 'application/json'
        }

    })

    const responseBody = response.json();

    console.log(responseBody);

});
