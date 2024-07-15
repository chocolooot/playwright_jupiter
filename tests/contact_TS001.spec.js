import { test, expect } from '@playwright/test';
import { LandingPage } from '../pageObjects/landingPage';
import { Contact } from '../pageObjects/contact';

test('User Can Validate Error Messages', async ({ page }) => {

    const landing = new LandingPage(page);
    const contact = new Contact(page);

    await landing.gotoLandingPage();
    await page.waitForTimeout(5000);
    await landing.validateLandingPage();
    await contact.gotoContactPage();
    await contact.validateContactPage();
    await contact.validateContactFields();
    await page.close();

});

test('User Can Send Feedback Form', async ({ page }) => {

    const landing = new LandingPage(page);
    const contact = new Contact(page);

    await landing.gotoLandingPage();
    await page.waitForTimeout(5000);
    await landing.validateLandingPage();
    await contact.gotoContactPage();
    await contact.validateContactPage();
    await contact.submitFeedback();
    await page.close();

});