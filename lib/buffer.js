'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter;
var buf = new Buffer(8);
var fileEvents = new EE();
var bufData = module.exprots = 0;
var colorPalette = module.exports = {};
var newColorPalette = module.exports = {};

fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){
// fs.readFile(__dirname + '/../img/non-palette-bitmap.bmp', function(err, data){
// fs.readFile('../img/palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error buffering bitmap', err);
    // console.log('this is dat file thing ', data);
    buf = data;
    colorPalette['length'] =buf.readUInt32LE(2);//11078
    colorPalette['width'] = buf.readUInt32LE(18);//100
    colorPalette['height']= buf.readUInt32LE(22);//100
    colorPalette['bitsPerPix'] = buf.readUInt32LE(28);//8 in palette, 24 in non
    colorPalette['type'] = buf.toString('utf8', 0, 2);//BM
// palette();
console.log('palette filled', palette());
});
// var palette = function(){
function palette(){
  var j = 0;
  for (var i = 53; i < 310; i++ ){
      colorPalette[j] = buf.readUInt8(i);  //52<palette<310
      j++;
  }
  // console.log('colorPalette filled ', colorPalette);
  console.log('color palette 55:',colorPalette[55]);
  return(colorPalette);
}

// pushes 'transformData' to new bitmap
// fs.createWriteStream('../img/new-palette-bitmap.bmp', function(err, data){
fs.createWriteStream(__dirname + '/../img/new-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error transfering data to new bitmap', err);


  console.log('new stream running');
});





fileEvents.on('done', function(data) {
  fileEvents.emit('done', data.toString());
  colorPalette[i][j];
  console.log('done');
});


// process.next(function() {
//   setTimeout(function() {fileEvents.emit('done', data.toString());}, 1000);
// });

