'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter;
var buf = new Buffer(8);
var fileEvents = new EE();
var bufData = 0;
var colorPalette = module.exports = {};

fs.readFile(__dirname + '/img/palette-bitmap.bmp', function(err, data){
// fs.readFile(__dirname + '/img/non-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error madude:', err);
    // console.log('this is dat file thing ', data);
    colorPalette['length'] =data.readUInt32LE(2);//11078
    colorPalette['width'] = data.readUInt32LE(18);//100
    colorPalette['height']= data.readUInt32LE(22);//100
    colorPalette['bitsPerPix'] = data.readUInt32LE(28);//8 in palette, 24 in non
    colorPalette['type'] = data.toString('utf8', 0, 2);//BM
debugger;
var palette = function(){
    var j = 0;
    for (var i = 53; i < 310; i++ ){
        colorPalette[j] = data.readUInt8(i);  //52<palette<310
        j++;

    }
    return(colorPalette);
  };
  console.log('colorPalette', palette());
});


sortColors();
function sortColors(){
  var x = colorPalette[9];
  console.log('first set',x);
}









fileEvents.on('done', function(data) {
  fileEvents.emit('done', data.toString());
  console.log('done');
});


// process.next(function() {
//   setTimeout(function() {fileEvents.emit('done', data.toString());}, 1000);
// });

