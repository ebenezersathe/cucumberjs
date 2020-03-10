const { setWorldConstructor } = require('cucumber');
const puppeteer = require("puppeteer-core");
const dotenv = require('dotenv').config();

// CONFIGURING BROWSER
const browserConfig = require('./browserConfig.json');
const width = browserConfig.winSizeWidth;
const height = browserConfig.winSizeHeight;
const args = [`--window-size=${width},${height}`];
const options = {
    executablePath: process.env.CHROME_PATH, //Chrome browser
    headless: false,
    args,
    slowMo: 100
  };

class world {
    construct() {
        this.world = "";
    }

    // BROWSER Set Up
    async openBrowser () {
        // Launch Browser
        this.browser = await puppeteer.launch(options);
        this.page = await this.browser.newPage();
        await this.page.setViewport({
            width: width,
            height: height
        });
    }

    // BROWSER Tear Down
    async closeBrowser () {
        await this.browser.close();
    }
}

setWorldConstructor(world);