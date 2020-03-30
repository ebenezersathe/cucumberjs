const { Given, When, Then } = require('cucumber');
const searchLocator = require('../locators/gSearch-locator.json');
const assert = require('assert');

const { 
    logo, searchBar, searchBtn, resultEnd
} = searchLocator;

Given('I am on {string}', async function (URL) {
    await this.page.goto(URL);
    assert.ok(await this.page.$(logo) != null);
});

When('I enter {string} in the search bar', async function (keyword) {
    await this.page.type(searchBar, keyword);
});

When('Click Submit', async function () {
    await this.page.waitFor(5000);
    await this.page.click(searchBtn);
});

Then('Search results page is displayed for {string}', async function (keyword) {
    await this.page.waitFor(5000);

    await this.page.waitForSelector(resultEnd);

    let getElementText = await this.page.evaluate(() => document.querySelector("[data-attrid=title]").innerText);

    let searchTitle = getElementText.toLowerCase();
    let keywordSearch = keyword.toLowerCase();

    assert.strictEqual(searchTitle, keywordSearch, 'Keyword does not match title');
});