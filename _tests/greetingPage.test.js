
const assert = require('assert');
const GreetingPageReachableTest = require('../_lib/GreetingPageReachableTest');
const GreetingPageSubstringTest = require('../_lib/GreetingPageSubstringTest');
const uri = 'https://sdetassessment.azurewebsites.net/greeting';


describe('greeting page', function() {

  describe('reachable', function() {
    it('the page is reachable', async function() {
      testCase = new GreetingPageReachableTest('chrome');
      try {
        await testCase.preTest();
        let res = await testCase.run();
        assert.strictEqual(res, uri);
      } catch(err) {
        throw err;
      } finally {
        await testCase.postTest();
      }
    });
  });

  describe('substring', function() {
    describe('the string is a substring', function() {
      it('the proper message is displayed', async function() {
        const substring = '1 2 3';
        testCase = new GreetingPageSubstringTest('chrome', null, substring);
        try {
          await testCase.preTest();
          let res = await testCase.run();
          assert.strictEqual(res, 'True: The text does contain the integers 1 2 3 in this order.');
        } catch(err) {
          throw err;
        } finally {
          await testCase.postTest();
        }
      });
    });

    describe('the string is not a substring', function() {
      it('the proper message is displayed', async function() {
        const substring = '12 3';
        testCase = new GreetingPageSubstringTest('chrome', null, substring);
        try {
          await testCase.preTest();
          let res = await testCase.run();
          assert.strictEqual(res, 'False: The text does not contain the integers 1 2 3 in this order.');
        } catch(err) {
          throw err;
        } finally {
          await testCase.postTest();
        }
      });
    });

  });

});