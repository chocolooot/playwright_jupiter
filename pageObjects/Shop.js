const { expect } = require("@playwright/test");

exports.Shop = class Shop {

    constructor(page)   {
        this.page = page;
        this.shopTeddyBear =  page.locator("//h4[text()='Teddy Bear']");
        this.shopStuffedFrog =  page.locator("//h4[text()='Stuffed Frog']");
        this.shopHandmadeDoll =  page.locator("//h4[text()='Handmade Doll']");
        this.shopFluffyBunny =  page.locator("//h4[text()='Fluffy Bunny']");
        this.shopSmileyBear =  page.locator("//h4[text()='Smiley Bear']");
        this.shopFunnyCow =  page.locator("//h4[text()='Funny Cow']");
        this.shopValentineBear =  page.locator("//h4[text()='Valentine Bear']");
        this.shopSmileyFace =  page.locator("//h4[text()='Smiley Face']");
        this.shopNavigateBtn = page.locator("//a[text()='Shop']");
        this.shopBuyFrog = page.locator("//div[contains(@class, 'products')]//li[2]//div//p//a[text()='Buy']");
        this.shopBuyBunny = page.locator("//div[contains(@class, 'products')]//li[4]//div//p//a[text()='Buy']");
        this.shopBuyValBear = page.locator("//div[contains(@class, 'products')]//li[7]//div//p//a[text()='Buy']");
    }

    async validateShopPage() {
        await expect(this.shopTeddyBear).toBeVisible();
        await expect(this.shopStuffedFrog).toBeVisible();
        await expect(this.shopHandmadeDoll).toBeVisible();
        await expect(this.shopFluffyBunny).toBeVisible();
        await expect(this.shopSmileyBear).toBeVisible();
        await expect(this.shopFunnyCow).toBeVisible();
        await expect(this.shopValentineBear).toBeVisible();
        await expect(this.shopSmileyFace).toBeVisible();
    }

    async gotoShopPage() {
        await this.shopNavigateBtn.click();
    }

    async selectStuffedFrog() {
        await this.shopBuyFrog.click();
        await this.page.waitForTimeout(1000);
    }

    async selectFluffyBunny() {
        await this.shopBuyBunny.click();
        await this.page.waitForTimeout(1000);
    }

    async selectValentineBear() {
        await this.shopBuyValBear.click();
        await this.page.waitForTimeout(1000);
    }
    
    async addtoCartProducts() {
        await this.selectStuffedFrog();
        await this.selectStuffedFrog();
        await this.selectFluffyBunny();
        await this.selectFluffyBunny();
        await this.selectFluffyBunny();
        await this.selectFluffyBunny();
        await this.selectFluffyBunny();
        await this.selectValentineBear();
        await this.selectValentineBear();
        await this.selectValentineBear();
        await this.page.waitForTimeout(3000);
    }
};