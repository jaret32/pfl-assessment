
const { By, until } = require('selenium-webdriver');
const Test = require('./Test.js');


class GreetingPageTest extends Test {

  /**
   * overrides the preTest method in the Test class
   * @override
   */
  async preTest() {
    await this.driver.get('https://sdetassessment.azurewebsites.net');
    let selector = this.driver.findElement(By.linkText("Find '1 2 3'"));
    let button = await this.driver.wait(until.elementIsVisible(selector));
    await button.click();
  }

}

module.exports = GreetingPageTest;
