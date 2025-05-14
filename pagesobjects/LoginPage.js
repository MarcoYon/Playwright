class LoginPage {

    constructor(page)
    {
        this.page = page;
        this.signInbutton = page.locator("[value='Login']");
        this.userEmail = page.locator("#userEmail");
        this.password = page.locator("#userPassword");
    }

    async goUrl()
    {
        await this.page.goto("https://rahulshettyacademy.com/client");
    }

    async validLogin(email, password){
        await this.userEmail.type(email);
        await this.password.type(password);
        await this.signInbutton.click();
        await this.page.waitForLoadState('networkidle');
    }

}

module.exports = {LoginPage};