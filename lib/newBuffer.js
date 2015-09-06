'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter;

var newBuf = module.exports = new Buffer(8);
var fileEvents = new EE();
var CPalette = require('./color-map');
var Trans = require('./transform');
var paletteInfo = module.exports = {};


var rs = fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){
// fs.readFile(__dirname + '/../img/non-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error buffering bitmap', err);
    buf = data;
    paletteInfo.length = buf.readUInt32LE(2);//11078
    paletteInfo.width = buf.readUInt32LE(18);//100
    paletteInfo.height = buf.readUInt32LE(22);//100
    paletteInfo.bitsPerPix = buf.readUInt32LE(28);//8 in palette, 24 in non
    paletteInfo.type = buf.toString('utf8', 0, 2);//BM
    CPalette.colorPalette(paletteInfo, data);
    Trans.Transform(paletteInfo);
});
