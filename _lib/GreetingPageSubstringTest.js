
const { By, until } = require('selenium-webdriver');
const GreetingPageTest = require('./GreetingPageTest.js');


class GreetingPageSubstringTest extends GreetingPageTest {

  /**
   * overrides the constructor in the Test class
   * @override
   */
  constructor(browser, options, substring) {
    super(browser, options);
    this.substring = substring;
  }

  /**
   * implements the abstract preTest method from the Test class
   * @override
   */
  async run() {
    let buttonSelector = this.driver.findElement(By.id('searchbutton'));
    let inputSelector = this.driver.findElement(By.id('searchtext'));
    let textSelector = this.driver.findElement(By.xpath('/html/body/div/div/div/div/p[2]'));
    let input = await this.driver.wait(until.elementIsVisible(inputSelector));
    await input.sendKeys(this.substring);
    let button = this.driver.wait(until.elementIsVisible(buttonSelector));
    await button.click();
    let text = this.driver.wait(until.elementIsVisible(textSelector));
    return await text.getText();
  }

}

module.exports = GreetingPageSubstringTest;
