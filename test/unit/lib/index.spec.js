var request = hmt.lib('index');

describe('index', function () {
  it('should be a function', function () {
    hmt.assert(typeof request === 'function');
  });

  it('should expose a reset function', function () {
    hmt.assert(typeof request.reset === 'function');
  });

  it('should expose a get function', function () {
    hmt.assert(typeof request.get === 'function');
  });

  it('should expose a post function', function () {
    hmt.assert(typeof request.post === 'function');
  });
});
