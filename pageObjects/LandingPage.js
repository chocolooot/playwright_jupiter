const { expect } = require("@playwright/test");

exports.LandingPage = class LandingPage {

    constructor(page) {
        this.page = page;
        this.jupiterLogo = page.locator("//div//a[2][text()='Jupiter Toys']");
        this.jupiterHeader = page.locator("//div[@class='hero-unit']//h1[text()='Jupiter Toys']");
        this.jupiterDesc = page.locator("//p//small[@class='muted']");
        this.jupiterWelcmHdr = page.locator("//p[contains(., 'Welcome')]");
        this.jupiterWelcmDesc = page.locator("//p[contains(., 'incididunt ut')]");
        this.jupiterWelcmShopBtn = page.locator("//p//a[text()='Start Shopping »']");
        this.jupiterNavPagList = page.locator("//div//ul//li//a");
    }

    async gotoLandingPage() {
        await this.page.goto('https://jupiter.cloud.planittesting.com/#/');
    }

    async validateLandingPage() {
        await expect(this.jupiterLogo).toBeVisible();
        await expect(this.jupiterHeader).toBeVisible();
        await expect(this.jupiterDesc).toBeVisible();
        await expect(this.jupiterWelcmHdr).toBeVisible();
        await expect(this.jupiterWelcmDesc).toBeVisible();
        await expect(this.jupiterWelcmShopBtn).toBeVisible();
    }
};