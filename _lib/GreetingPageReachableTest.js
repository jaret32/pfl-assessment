
const GreetingPageTest = require('./GreetingPageTest.js');


class GreetingPageReachableTest extends GreetingPageTest {

  /**
   * implements the abstract preTest method from the Test class
   * @override
   */
  async run() {
    let location = await this.driver.getCurrentUrl();
    return location;
  }

}

module.exports = GreetingPageReachableTest;
