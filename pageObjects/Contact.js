const { expect } = require("@playwright/test");

exports.Contact = class Contact {

    constructor(page)   {
        this.page = page;
        this.contactBannerMsg = page.locator("//div[contains(@class, 'alert-info')]");
        this.contactForeName = page.locator("//div//input[@id='forename']");
        this.contactSurname = page.locator("//div//input[@id='surname']");
        this.contactEmail = page.locator("//div//input[@id='email']");
        this.contactTele = page.locator("//div//input[@id='telephone']");
        this.contactMessage = page.locator("//div//textarea[@id='message']");
        this.contactSubmitBtn = page.locator("//div//a[text()='Submit']");
        this.contactSendingHdr = page.locator("//div//h1[text()='Sending Feedback']");
        this.contactSuccessMsg = page.locator("//div//div[@class='alert alert-success']");
        this.contactBackBtn = page.locator("//a[contains(., 'Back')]");
        this.contactGenErrorMsg = page.locator("//div[contains(@class, 'alert-error')]");
        this.contactForeReqrdMsg = page.locator("//span[@id='forename-err']");
        this.contactEmailReqrdMsg = page.locator("//span[@id='email-err']");
        this.contactMessgReqrdMsg = page.locator("//span[@id='message-err']");
        this.contactNavigateBtn = page.locator("//a[text()='Contact']");
    }
    
    async gotoContactPage() {
        await this.contactNavigateBtn.click();
    }

    async validateContactPage() {
        await expect(this.contactBannerMsg).toBeVisible();
        await expect(this.contactForeName).toBeVisible();
        await expect(this.contactMessage).toBeVisible();
        await expect(this.contactSubmitBtn).toBeVisible();
    }

    async contactErrorMessage() {
        await expect(this.contactGenErrorMsg).toBeVisible();
        await expect(this.contactForeReqrdMsg).toBeVisible();
        await expect(this.contactEmailReqrdMsg).toBeVisible();
        await expect(this.contactMessgReqrdMsg).toBeVisible();
    }

    async inputFeeback(foreNameVal, surNameVal, emailVal, msgVal) {
        await this.contactForeName.fill(foreNameVal);
        await this.contactSurname.fill(surNameVal);
        await this.contactEmail.fill(emailVal);
        await this.contactMessage.fill(msgVal);
    }

    async submitFeedback() {
        await this.inputFeeback('Anton', 'Automated', 'test@test.com', 'this is a test message');
        await this.contactSubmitBtn.click();
        await expect(this.contactSendingHdr).toBeVisible();
        await this.page.waitForTimeout(14000);
        await expect(this.contactSuccessMsg).toBeVisible();
        await this.contactBackBtn.click();
    }

    async validateContactFields() {
        await this.contactSubmitBtn.click();
        await this.contactErrorMessage();
        await this.submitFeedback();
    }
};