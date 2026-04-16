class LoginPageSwag {
    constructor(page) {

        this.page = page;
        this.username = page.locator("#user-name");
        this.password = page.locator("#password");
        this.loginButton = page.locator("#login-button");
    }

    async function login(user, pass) {

    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
    console.log("logged in successfully !");


}

}

export default LoginPageSwag;