
/** abstract Test class used to run tests on the web page and API */
class Test {

  /**
   * abstract method where the pre test logic should be implemented
   * @abstract
   */
  async preTest() { throw new Error('abstract method not implemented'); }

  /**
   * abstract method where the actual test logic should be implemented
   * @abstract
   * @returns {Object} expected test result 
   */
  async run() { throw new Error('abstract method not implemented'); }

  /**
   * abstract method where the post test logic should be implemented
   * @abstract
   */
  async postTest() { throw new Error('abstract method not implemented'); }

}

module.exports = Test;
