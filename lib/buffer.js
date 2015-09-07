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

var rs = fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){
// fs.readFile(__dirname + '/../img/non-palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error buffering bitmap', err);

    paletteInfo.length = data.readUInt32LE(2);//11078
    paletteInfo.width = data.readUInt32LE(18);//100
    paletteInfo.height = data.readUInt32LE(22);//100
    paletteInfo.bitsPerPix = data.readUInt32LE(28);//8 in palette, 24 in non
    paletteInfo.type = data.toString('utf8', 0, 2);//BM

    CPalette.colorPalette(data, colorArray);
    colorString = Trans.Transform(colorArray);
     // console.log(colorString);

     // fs.writeFile(__dirname + '/../img/palette-bitmap.bmp', colorString,[55, 310]);

//54--310
    // console.log(Trans.transform().toString());


    // data = paletteInfo.writeUInt(8);

});

// var rStream = fs.createReadStream(__dirname + '/../img/palette-bitmap.bmp');
// var wStream = fs.createWriteStream(__dirname + '/../img/newImage.js');

// rStream.on('data', function(data){
//   wStream.write(colorString, 54, 310);
// // rStream.pipe(wStream);
// });


// var rStream = fs.createReadStream(__dirname + '/../img/palette-bitmap.bmp');


// var wStream = fs.createWriteStream(__dirname + '/../img/new-palette-bitmap.txt', 'utf8le');
// rStream.pipe(wStream);
// wStream.on('finish', function(){
//   console.log('new image complete');
// });

// pushes 'transformData' to new bitmap
// fs.createWriteStream('../img/new-palette-bitmap.bmp', function(err, data){
// fs.createWriteStream(__dirname + '/../img/new-palette-bitmap.bmp', function(err, data){
//   if (err) return console.log('error transfering data to new bitmap', err);


//   console.log('new stream running');
// });



// fileEvents.on('done', function(data) {
//   fileEvents.emit('done', data.toString());
//   colorPalette[i][j];
//   console.log('done');
// });


// process.next(function() {
//   setTimeout(function() {fileEvents.emit('done', data.toString());}, 1000);
// });

