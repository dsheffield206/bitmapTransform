'use strict';

var fs = require('fs');
var EE = require('events').EventEmitter;
var fileEvents = new EE();  //need to use for async
var buf = module.exports = new Buffer(8);
var CPalette = require('./color-map');
var paletteInfo = {};

var rs = module.exports = {};


// fs.readFile(__dirname + '/../img/non-palette-bitmap.bmp', function(err, data){
var rs = fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){

  if (err) return console.log('error buffering bitmap', err);

    paletteInfo.length = data.readUInt32LE(2);//11078
    paletteInfo.width = data.readUInt32LE(18);//100
    paletteInfo.height = data.readUInt32LE(22);//100
    paletteInfo.bitsPerPix = data.readUInt32LE(28);//8 in palette, 24 in non
    paletteInfo.type = data.toString('utf8', 0, 2);//B

    CPalette.darken(data);

    fs.writeFile(__dirname + '/../img/darkenImage.bmp', data, function() {
        if (err) return console.log(err);

        CPalette.invert(data);

        fs.writeFile(__dirname + '/../img/invertImage.bmp', data, function() {
            if (err) return console.log(err);
        });
    });
// console.log(paletteInfo);
});







