'use strict';

var ResponseMock = require('./ResponseMock');

module.exports = RequestMock;

/**
 * @constructor
 * @param {object} config Request configuration
 * @param {string} config.url Request URL
 * @param {string} config.method Request method (POST, GET, etc)
 * @param {string} config.body Request body
 * @param {function} callback Called when request completes
 */
function RequestMock(config, callback) {
  this.callback = callback;
  this.url      = config.url;
  this.method   = config.method;
  this.body     = config.body;
}

/**
 * Respond to request
 * @param {string} err - error message if request did not go through
 * @param {number} status - http response code
 * @param {object} headers - response headers
 * @param {string} body - response body
 */
RequestMock.prototype.respond = function (err, status, headers, body) {
  this.response = new ResponseMock(status, headers, body);
  this.callback(err, this.response, body);
};
