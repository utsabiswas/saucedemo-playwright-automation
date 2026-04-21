const { chromium } = require("playwright");
(async () => {
    const browser = await chromium.launch({ headless: false })
    const page = await browser.newPage();
    // open website
    await page.goto("https://www.saucedemo.com");

    // login 
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    // add products
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#add-to-cart-sauce-labs-bike-light');
    await page.click('#add-to-cart-sauce-labs-bolt-t-shirt');
    await page.click('#add-to-cart-sauce-labs-fleece-jacket');
    //count
    const count = await page.locator('.shopping_cart_badge').textContent();
    console.log("Total products:", count);
    // open cart
    await page.click('.shopping_cart_link');
    // checkout
    await page.click('#checkout'); 

})();