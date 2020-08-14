
const {Builder, Options } = require('selenium-webdriver');


/** abstract Test class used to run tests using selenium webdriver */
class Test {

  /**
   * initializes the webdriver using the given browser and browser options
   * @param {string} browser the name of the target browser
   * @param {Options} options a selenium Options object defining browser options
   */
  constructor(browser, options = null) {
    this.driver = new Builder()
      .forBrowser(browser)
      .build();
  }

  /**
   * peforms the steps to reach the page where the test will take place
   * 
   */
  async preTest() {
    // do nothing
    return;
  }

  /**
   * abstract method where the test should be run
   * @abstract
   * @returns 
   */
  async run() {
    throw new Error('abstract method not implemented');
  }

  /**
   * tears down the webdriver and handles any other things
   * 
   */
  async postTest() {
    try {
      await this.driver.quit();
    } catch {}
  }

}

module.exports = Test;
