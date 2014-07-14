'use strict';

module.exports = ResponseMock;

/**
 * @constructor
 * @param {number} status HTTP status code
 * @param {object} headers HTTP response headers
 * @param {string} body Response body
 */
function ResponseMock(status, headers, body) {
  this.statusCode = status;
  this.headers    = headers;
  this.body       = body;
}
