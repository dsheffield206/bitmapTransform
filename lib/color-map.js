'use strict';

module.exports.colorPalette = function colorPalette(obj, data){
  var j = 0;
  // var x = 0;
  for (var i = 53; i < 310; i++ ){
    obj[j] = data.readUInt8(i);  //52<palette<310
    j++;
    // if(obj[j] == 0)
    //   {x++;}
    // if(obj[j] !== 0)
    //   {x = 0;}
    // if (x == 6)
    //   return(obj);
  }
  // console.log(obj);

};
