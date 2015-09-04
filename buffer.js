'use strict';

var fs = require('fs');

var buf = new Buffer(8);

console.log(buf);

fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error madude:', err);
  console.log('this is dat file thing ', data);
});
