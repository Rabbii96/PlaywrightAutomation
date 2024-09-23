class loginPage
{

    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="//input[@placeholder='Enter Password']"
        this.loginbutton="//button[text()='Sign in']"
    }

    async loginToApplication()
    {
        await this.page.fill(Admin)
    }
}