const { After, Before } = require('cucumber');


// CREATES BEFORE HOOK - CALLED FROM ENV.JS
// FUNCTION IS EXECUTED AT THE BEGINNING OF EACH SCENARIO
Before(async function() {
    return await this.openBrowser();
});

// CREATES AFTER HOOK - CALLED FROM ENV.JS
// FUNCTION IS EXECUTED AT THE END OF EACH SCENARIO
After(async function() {
    return await this.closeBrowser(); // CLOSING BROWSER AUTOMATICALLY CLEARS CACHE/COOKIES -- UNNECESSARY TO PERFORM THE FUNCTION DIRECTLY
})