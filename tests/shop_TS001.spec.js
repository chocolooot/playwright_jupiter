import { test, expect } from '@playwright/test';
import { LandingPage } from '../pageObjects/landingPage';
import { Shop } from '../pageObjects/shop';
import { Cart } from '../pageObjects/cart';

test('User Can Validate Product Value', async ({ page }) => {

    const landing = new LandingPage(page);
    const shop = new Shop(page);
    const cart = new Cart(page);

    await landing.gotoLandingPage();
    await page.waitForTimeout(5000);
    await landing.validateLandingPage();
    await shop.gotoShopPage();
    await shop.validateShopPage();
    await shop.addtoCartProducts();
    await cart.gotoCartPage();
    await page.waitForTimeout(5000);
    await cart.validateCartPage();
    await cart.validateProductPrice();
    await cart.validateProductSubTotal();
    await cart.validateProductTotal();
    await page.close();

});