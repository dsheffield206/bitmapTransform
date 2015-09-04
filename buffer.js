'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter
var buf = new Buffer(8);
var fileEvents = new EE;

console.log(buf);

fileEvents.on('done', function(data) {
  fileEvents.emit('done', data.toString());
  console.log('done');
});

fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error madude:', err);
  console.log('this is dat file thing ', data);
});

process.next(function() {
  setTimeout(function() {fileEvents.emit('done', data.toString());}, 1000);
});
