
const assert = require('assert');
const ApiTest = require('../_lib/ApiTest.js');

const username = 'apitest@pfllinkappcenterdev.onmicrosoft.com';
const password = 'Request12345';
const storeId = 136085;
const productId = 9885;


testCase = new ApiTest(username, password);

describe('endpoint /api/v1/store/{storeID}/product/{productID}', function() {
  describe('valid store and product', function() {
    it('status code 200', async function() {
      await testCase.preTest();
      let res = await testCase.testProduct(storeId, productId);
      assert.strictEqual(res, 200);
    });
  });

  // describe('invalid store', function() {
  //   it('status code 400', async function() {
  //     await testCase.preTest();
  //     let res = await testCase.testProduct(storeId, productId);
  //     assert.strictEqual(res, 400);
  //   });
  // });

  describe('invalid credentials', function() {
    it('status code 401', async function() {
      await testCase.preTest();
      let res = await testCase.testProduct(1360857, productId);
      assert.strictEqual(res, 401);
    });
  });

  describe('product does not exist', function() {
    it('status code 404', async function() {
      await testCase.preTest();
      let res = await testCase.testProduct(storeId, 988587);
      assert.strictEqual(res, 404);
    });
  });
});