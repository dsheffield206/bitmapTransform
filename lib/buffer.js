'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter;
var fileEvents = new EE();  //need to use for async
var buf = module.exports = new Buffer(8);

var CPalette = require('./color-map');
var Trans = require('./transform');
var paletteInfo = module.exports = {};
var colorArray = module.exports = [];
var colorString = '';
var bufferObj = {};


// fs.readFile(__dirname + '/../img/non-palette-bitmap.bmp', function(err, data){
var rs = fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){

  if (err) return console.log('error buffering bitmap', err);
    bufferObj = data;

    console.log(bufferObj);
    console.log(bufferObj.readUInt8(80));

    CPalette.invert(10, bufferObj);

    console.log(bufferObj.readUInt8(80));

    paletteInfo.length = data.readUInt32LE(2);//11078
    paletteInfo.width = data.readUInt32LE(18);//100
    paletteInfo.height = data.readUInt32LE(22);//100
    paletteInfo.bitsPerPix = data.readUInt32LE(28);//8 in palette, 24 in non
    paletteInfo.type = data.toString('utf8', 0, 2);//BM

    colorString = Trans.Transform(colorArray);

var wStream = fs.createWriteStream(__dirname + '/../img/newImage.bmp');
wStream.write(bufferObj);

});


