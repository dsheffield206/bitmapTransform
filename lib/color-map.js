'use strict';

function darken(color, bufferObj){
  var i = 54;
  for (var counter = 0; counter < 255; counter++, i+=4 ){
    for (var j = 0; j < 3; j++) {
      bufferObj.writeUInt8(Math.floor(bufferObj.readUInt8(i + j) * 0.25), i+j);
    }
  //i += 4;
  }
}
function invert(color, bufferObj){
  var i = 54;
  for (var counter = 0; counter < 255; counter++, i+=4 ){
    for (var j = 0; j < 3; j++) {
      bufferObj.writeUInt8(255 - bufferObj.readUInt8(i + j), i+j);
    }
  //i += 4;
  }
}

exports.darken = darken;
exports.invert = invert;

