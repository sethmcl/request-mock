'use strict';

var Request  = require('./Request');
var instance = new Request();

module.exports       = instance.request;
module.exports.reset = instance.reset;
module.exports.post  = instance.post;
module.exports.get   = instance.get;
