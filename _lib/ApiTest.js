
const axios = require('axios');
const qs = require('querystring');
const Test = require('./Test.js');

const authEndpoint = 'https://login.microsoftonline.com/pfllinkappcenterdev.onmicrosoft.com/oauth2/token';


/** ApiTest class used to run tests against on the Api endpoints */
class ApiTest extends Test {

  /**
   * initializes the instance for a specific Api user
   * @param {string} username the account username
   * @param {string} password the account password
   */
  constructor(username, password) {
    super();
    this.username = username;
    this.password = password;
  }

  /**
   * gets an access token and sets the default headers
   * @override
   */
  async preTest() {
    if (!this.token) {
      let res = await axios.post(authEndpoint, qs.stringify({
        grant_type: 'password',
        client_id: 'a5f2b232-cd18-4a46-be6d-cf4c9d42e5cf',
        client_secret: '7zg1SZ*o0@qq6ERn:tUqY=5rWGCXW5V3',
        resource: 'https://pfl.pfllink.appportal.api',
        password: this.password,
        username: this.username
      }));
      this.token = res.data.access_token;
      this.session = axios.create({
        baseURL: 'https://pfllink-api-generic-staging.azurewebsites.net/api/v1/',
        headers: {
          'Authorization': `Bearer ${this.token}`,
          'ocp-apim-subscription-key': 'e67a9b008f554bb380c39a499a3a60a8'
        }
      });
    }
  }

  /**
   * gets the product info for a given store and product
   * @param {number} the store id used in the request path
   * @param {number} the product id used in the request path
   */
  async testProduct(storeId, productId) {
    try {
      let res = await this.session.get(`/store/${storeId}/product/${productId}`);
      return res.status;
    } catch (err) {
      return err.response.status;
    }
  }

}

module.exports = ApiTest;
