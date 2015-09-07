'use strict';

// module.exports.colorPalette = function colorPalette(data, newData){
//   var j = 0;
//   for (var i = 53; i < 310; i++ ){
//     newData[j] = data.readUInt8(i);  //52<palette<310
//     j++;
//   }
// };


module.exports.colorPalette = function colorPalette(data, newData){
  var j = 0;
  for (var i = 0; i < data.length; i++ ){
    newData[j] = data.readUInt8(i);  //52<palette<310
    j++;
  }
};
