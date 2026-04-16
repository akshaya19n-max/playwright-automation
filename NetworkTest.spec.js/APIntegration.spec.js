const { test, expect, request } = require('@playwright/test');
const APIUtils = require('./utils/APIUtils');

const loginPayLoad =
{

    userEmail: "john787@gmail.com",
    userPassword: "Akshayaaa@1"

};

const orderPayload =
{
    orders: [{ country: "Cuba", productOrderedId: "6960eae1c941646b7a8b3ed3" }]

};
let token;
let orderID;
test.beforeAll(async () => {

    //just like browser.newContext we have to create request.newContext for API testing 
    const apiContext = await request.newContext();
    const apiUtils_obj = new APIUtils(apiContext, orderPayload);
    apiUtils_obj.createOrder(orderPayload);

    //we are sending the url in which we need to login and the user information required for login 
    //while 'sending' any information we use post method

    //get this url from the header section

    const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {
            data: loginPayLoad
        })

    await expect(loginResponse.ok()).toBeTruthy();
    const loginResponseJson = await loginResponse.json();
    token = loginResponseJson.token;
    console.log(token);
    /* now we have received the token , we have to insert it in the application,to 
      login without user id and password using javascript, */


    /*scenario2 : check if order is placed successfully 
     here the requirement is to check if order is placed or not , so the steps needed to place the 
     order,can be skipped . order can be placed using API 
     we need : 
     1. authentication (token ) 
     2. product name 
     3. input value for the form's mandatory field (payload)

     */

    const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayload,
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'

            },

        }
    )
    const orderResponseJson = await orderResponse.json();

    /* {
     "orders": [
         "69a027680ab5a029774c21ca"
     ],
     "productOrderId": [
         "6960eac0c941646b7a8b3e68"
     ],
     "message": "Order Placed Successfully"
 }

 this is the json format , we need the [0] element which is the order id 

     */
    orderID = orderResponseJson.orders[0];


})

test.only('practice test case', async ({ page }) => {


    /* now we have received the token , we have to insert it in the application,to 
      login without user id and password using javascript, */

    const apiUtils_obj = new APIUtils(apiContext, orderPayload);
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value)
    }, token);

    page.pause();

    await page.goto("https://rahulshettyacademy.com/client/dashboard/dash");


    await page.locator("button[routerlink*='myorders']").click();



});

