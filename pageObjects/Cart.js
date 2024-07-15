const { expect } = require("@playwright/test");

exports.Cart = class Cart {

    constructor(page)   {
        this.page = page;
        this.cartInfoMessage =  page.locator("//div//p");
        this.cartCheckOutBtn =  page.locator("//td//a[text()='Check Out']");
        this.cartEmptyBtn =  page.locator("//td//a[text()='Empty Cart']");
        this.cartRemoveItemHdr =  page.locator("//div//h1[text()='Remove Item']");
        this.cartEmptyCartHdr =  page.locator("//div//h1[text()='Empty Cart']");
        this.cartRmveYesBtn =  page.locator("//div//a[text()='Yes']");
        this.cartRmveNoBtn =  page.locator("//div//a[text()='No']");
        this.cartProcessingHdr =  page.locator("//div//h1[text()='Processing Order']");
        this.cartSuccessMsg =  page.locator("//div//div[@class='alert alert-success']");
        this.cartShopAgainBtn =  page.locator("//div//p//a[text()='Shopping Again »']");
        this.cartCardTypeField =  page.locator("//select[@id='cardType']");
        this.cartCardNumField =  page.locator("//input[@id='card']");
        this.cartNavigateBtn = page.locator("//a[text()='Cart (']");
        this.cartItemLine1 = page.locator("//tr[1]//td[2]");
        this.cartItemLine2 = page.locator("//tr[2]//td[2]");
        this.cartItemLine3 = page.locator("//tr[3]//td[2]");
        this.cartItemSTtlLine1 = page.locator("//tr[1]//td[4]");
        this.cartItemSTtlLine2 = page.locator("//tr[2]//td[4]");
        this.cartItemSTtlLine3 = page.locator("//tr[3]//td[4]");
        this.cartTotal = page.locator("//td//strong");
    }

    async validateCartPage() {
        await expect(this.cartInfoMessage).toBeVisible();
        await expect(this.cartCheckOutBtn).toBeVisible();
        await expect(this.cartEmptyBtn).toBeVisible();
    }

    async gotoCartPage() {
        await this.cartNavigateBtn.click();
    }

    async validateProductPrice() {
        await expect(this.cartItemLine1).toHaveText("$10.99");
        await expect(this.cartItemLine2).toHaveText("$9.99");
        await expect(this.cartItemLine3).toHaveText("$14.99");
    }

    async validateProductSubTotal() {
        await expect(this.cartItemSTtlLine1).toHaveText("$21.98");
        await expect(this.cartItemSTtlLine2).toHaveText("$49.95");
        await expect(this.cartItemSTtlLine3).toHaveText("$44.97");
    }

    async validateProductTotal() {
        await expect(this.cartTotal).toContainText("116.9");
    }
};