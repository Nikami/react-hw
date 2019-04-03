const config = require('../../nightwatch.conf.BASIC.js');

module.exports = {
  'App mounting': (browser) => {
    browser
      .url(config.URL)
      .waitForElementVisible('main.app')
      .saveScreenshot(`${config.SCREENSHOT_PATH}app.e2e.png`)
      .end();
  },
};
