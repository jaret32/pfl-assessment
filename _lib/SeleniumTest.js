
const {Builder, Options } = require('selenium-webdriver');
const Test = require('./Test.js');


/** abstract SeleniumTest class used to run tests on a web page */
class SeleniumTest extends Test {

  /**
   * initializes the webdriver using the given browser and browser options
   * @param {string} browser the name of the target browser
   * @param {Options} options a selenium Options object defining browser options
   */
  constructor(browser, options = null) {
    super();
    this.driver = new Builder()
      .forBrowser(browser)
      .build();
  }

  /**
   * tears down the webdriver and handles any other things
   * @override
   */
  async postTest() {
    try {
      await this.driver.quit();
    } catch {}
  }

}

module.exports = SeleniumTest;
