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
        await this.page.fill(this.username,"admin@gmail.com")
        await this.page.fill(this.password,"admin@123")
        await this.page.click(this.loginbutton)
        await this.page.pause()
    }
}

module.exports=loginPage;
