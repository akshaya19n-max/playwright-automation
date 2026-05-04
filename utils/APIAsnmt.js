class APIAsnmt {


    constructor(apiContext, loginInPayload) {
        this.apiContext = apiContext;
        this.loginInPayload = loginInPayload;
    };

    async getToken() {
        const loginResponse = await this.apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login", {
            data: this.loginInPayload
        });

        const loginJson = await loginResponse.json();
        const token = loginJson.token;
        // console.log(token);
        return token;
    }

}
export default { APIAsnmt };



































