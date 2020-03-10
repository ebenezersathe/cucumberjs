var reporter = require('cucumber-html-reporter');
const dotEnv = require('dotenv').config();
let env = process.env.ENV;
let userName;
let executed;
let computerName = process.env['COMPUTERNAME'];

if (process.platform === "win32") {
    userName = process.env['USERNAME'];
    browser = "76.0.3809.100";
    platform = "Windows 10";
} else if (process.platform === "darwin") {
    userName = process.env['USER'];
    browser = "76.0.3809.132";
    platform = "macOS";
}

// if (computerName.toUpperCase() === 'EDCWCDTD002') {
//     executed = "Remote";
// } else {
//     executed = "Local";
// }

var options = {
        theme: 'hierarchy',
        columnLayout: 1,
        launchReport: true,
        jsonFile: 'reports/cucumber_report.json',
        output: 'reports/cucumber_report.html',
        screenshotsDirectory: 'screenshots/',
        storeScreenshots: true,
        noInlineScreenshots: false,
        scenarioTimestamp: true,
        reportSuiteAsScenarios: true,
        metadata: {
            "Test Environment": env,
            "Browser": browser,
            "Executed": executed,
            "Platform": platform,
            "Executed by": userName,
            "Machine": computerName
        }
    };

    reporter.generate(options);