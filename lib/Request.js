'use strict';

var RequestMock = require('./RequestMock');

module.exports = Request;

/**
 * @constructor
 */
function Request() {
  this.requests = [];
  this.reset    = this.reset.bind(this);
  this.get      = this.get.bind(this);
  this.post     = this.post.bind(this);
}

/**
 * @property {array} requests - list of requests
 * @default
 */
Request.prototype.requests = null;

/**
 * Reset data
 */
Request.prototype.reset = function () {
  this.requests.length = 0;
};

/**
 * @param {string} url - url for http request
 * @param {function} [callback] - callback function
 * @returns {undefined} returns no value
 */
Request.prototype.defaultRequest = function (url, callback) {
  return this.get(url, callback);
};

/**
 * GET request
 * @param {string} url - url for http request
 * @param {function} [callback] - callback function
 * @returns {undefined} returns no value
 */
Request.prototype.get = function (url, callback) {
  var config = {
    url: url,
    method: 'GET',
    body: ''
  };

  return this.request(config, callback);
};

/**
 * POST request
 * @param {string} url - url for http request
 * @param {function} [callback] - callback function
 * @returns {undefined} returns no value
 */
Request.prototype.post = function (url, callback) {
  var config = {
    url: url,
    method: 'POST',
    body: ''
  };

  return this.request(config, callback);
};

/**
 * @param {config} config - request options
 * @param {function} [callback] - callback function
 */
Request.prototype.request = function (config, callback) {
  this.requests.push(new RequestMock(config, callback));
};


