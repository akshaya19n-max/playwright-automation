class APIUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }

    //method to get token 
    async getToken() {

        const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data: this.loginPayLoad
            })

        await expect(loginResponse.ok()).toBeTruthy();
        const loginResponseJson = await loginResponse.json();
        token = loginResponseJson.token;
        console.log(token);
        return token;
    }


    //method to place order 
    async createOrder(orderPayload) {


        const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
            {
                data: orderPayload,
                headers: {
                    'Authorization': this.getToken(),
                    'Content-Type': 'application/json'

                },

            }
        )
        const orderResponseJson = await orderResponse.json();
        orderID = orderResponseJson.orders[0];
        return orderID;

    }

}

module.exports = APIUtils;