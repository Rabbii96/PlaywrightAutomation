class HomePage{

    constructor(page)
    {
        this.page=page
        this.manu="//img[@alt='menu']"
        this.logoutoption="//button[normalize-space()='Sign out']"
    }

    async logoutFromApplication()
    {
        await this.page.click(this.manu)
        await this.page.click(this.logoutoption)

    }
}
module.export=HomePage