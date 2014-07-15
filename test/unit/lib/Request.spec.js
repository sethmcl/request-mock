'use strict';

var Request = hmt.lib('Request');

describe('Request', function () {
  var request;

  beforeEach(function () {
    request = new Request();
  });

  describe('default request', function () {
    beforeEach(function () {
      request.defaultRequest('1.com');
    });

    it('should have made a single request', function () {
      hmt.assert(request.requests.length === 1);
    });

    it('should have made a GET request', function () {
      hmt.assert(request.requests[0].method === 'GET');
    });

    it('should have a request to the correct url ', function () {
      hmt.assert(request.requests[0].url === '1.com');
    });
  });

  describe('reset request', function () {
    beforeEach(function () {
      request.defaultRequest('1.com');
      request.reset();
    });

    it('should no requests', function () {
      hmt.assert(request.requests.length === 0);
    });
  });

  describe('get request', function () {
    beforeEach(function () {
      request.get('1.com');
    });

    it('should have made a single request', function () {
      hmt.assert(request.requests.length === 1);
    });

    it('should have made a GET request', function () {
      hmt.assert(request.requests[0].method === 'GET');
    });

    it('should have a request to the correct url ', function () {
      hmt.assert(request.requests[0].url === '1.com');
    });
  });

  describe('post request', function () {
    beforeEach(function () {
      request.post({url: '1.com'});
    });

    it('should have made a single request', function () {
      hmt.assert(request.requests.length === 1);
    });

    it('should have made a POST request', function () {
      hmt.assert(request.requests[0].method === 'POST');
    });

    it('should have a request to the correct url ', function () {
      hmt.assert(request.requests[0].url === '1.com');
    });
  });

  describe('request response', function () {
    var testErr, testResponse, testBody;

    beforeEach(function (done) {
      request.post('1.com', function (err, response, body) {
        testErr      = err;
        testResponse = response;
        testBody     = body;

        done();
      });

      request.requests[0].respond(
        null,
        200,
        { 'Content-Type': 'application/json' },
        'foo');
    });

    it('should not have returned an error', function () {
      hmt.assert(testErr === null);
    });

    it('should have returned a 200 response', function () {
      hmt.assert(testResponse.statusCode === 200);
    });

    it('should have returned a response body', function () {
      hmt.assert(testBody === 'foo');
    });

  });
});
