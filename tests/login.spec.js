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

})();