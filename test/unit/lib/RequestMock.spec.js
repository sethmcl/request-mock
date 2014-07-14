'use strict';

var RequestMock = hmt.lib('RequestMock');

describe('RequestMock', function () {
  var request;

  beforeEach(function () {
    request = new RequestMock({
      url: 'www.if.com',
      method: 'GET',
      body: 'foobar'
    }, hmt.spy());
  });

  it('should assign correct properties', function () {
    hmt.assert(request.url === 'www.if.com');
    hmt.assert(request.method === 'GET');
    hmt.assert(request.body === 'foobar');
    hmt.assert(typeof request.callback === 'function');
  });

  describe('respond', function () {
    var headers;

    beforeEach(function () {
      headers = { 'Content-Type': 'text/html' };
      request.respond(null, 200, headers, 'hello world');
    });

    it('should call callback with correct args', function () {
      hmt.assert(request.callback.callCount === 1);
      hmt.assert(request.callback.getCall(0).args[0] === null);
      hmt.assert.deepEqual(request.callback.getCall(0).args[1].headers, headers);
      hmt.assert(request.callback.getCall(0).args[2] === 'hello world');
    });
  });
});
