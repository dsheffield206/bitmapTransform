'use strict';

var fs = require('fs');

var buf = new Buffer(8);


// fs.readFile('./lib/non-palette-bitmap.bmp', function(err, data){
fs.readFile('./lib/palette-bitmap.bmp', function(err, data){
  if (err) return console.log('error madude:', err);
  console.log('this is dat file thing ', data);
  console.log(data.length);
  // buf[index] = data;
  // console.log(buf.toString('utf-8'));
  var type  = data.toString('utf8', 0, 2);  //starts at 0 and reads 2 spaces 0,1
  console.log(type);
  // var type2 = data.readUInt8LE(0);
  // console.log(type2);

  var size =data.readUInt32LE(2);  //also will use UInt16 and 8
  console.log(size);//30054
  var width = data.readUInt32LE(18);
  var height = data.readUInt32LE(22);
  console.log(width, height);

  var bitsPerPix = data.readUInt32LE(28);
  console.log(bitsPerPix); //24 in non-palette 8 in palette

  var firstPix = data.readUInt32LE(10);  //if >55 palette
  console.log(firstPix);  //non palette 54, palette 1078  0-40 header 41-54   55-1077 palette map

  var firstColor = data.readUInt8(62);
  console.log(firstColor);


// var colorPalette = data.readUInt32(46); for palette bit map, errors on non-palette
// console.log(colorPalette);  //falsy to test for palette or non

//header info 14 bytes
//header size 40 bytes

//bm type= starts at offset 14

  // var somedata = data.slice(100,150);
  // console.log(somedata);
  // data.writeUInt32LE();
  // console.log(data);
});





