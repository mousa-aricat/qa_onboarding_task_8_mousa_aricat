var execSync = require("child_process").execSync;
var fs = require("fs");
var mainDir = "cypress/features/";
var features_queue = [];
function run(features) {
    console.log("list of features to run: ", features);
    features.map(function (feature) {
        runFeature(feature);
    });
}
function runFeature(featureName) {
    console.log("runNewFeature(".concat(featureName, ")"));
    console.log("featureRunning Start Running ".concat(featureName));
    var chrome_path = process.env.CI ? "/usr/bin/google-chrome" : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
    var mac_exec_cmd = "cypress run -b \"".concat(chrome_path, "\" --headed --env allure=true --config specPattern='**/").concat(mainDir, "/").concat(featureName, "'");
    var linux_exec_cmd = "CYPRESS_NO_COMMAND_LOG=1 CYPRESS_BASE_URL=".concat(process.env.CYPRESS_BASE_URL, " ./node_modules/.bin/cypress run --headed --browser /usr/bin/google-chrome --env allure=true,MAILTRAP_INBOX_ID=").concat(process.env.MAILTRAP_INBOX_ID, ",MAILTRAP_ACCOUNT_ID=").concat(process.env.MAILTRAP_ACCOUNT_ID, ",MAILTRAP_API_KEY=").concat(process.env.MAILTRAP_API_KEY, " --config specPattern='**/").concat(mainDir, "/").concat(featureName, "'");
    var exec_cmd = process.env.CI ? linux_exec_cmd : mac_exec_cmd;
    execSync(exec_cmd, function (error, stdout, stderr) {
        console.log("stdout: ".concat(stdout));
        if (stderr) {
            console.error("stderr: ".concat(stderr));
        }
        if (error) {
            console.error("error: ".concat(error));
        }
    });
}
module.exports = { run: run };
