'use strict';

var buf = new Buffer('hello world');
Array.prototype.forEach.call(buf, function(data, index) {
  buf[index] = 255 - data;
});
console.log(buf.toString('utf-8'));
