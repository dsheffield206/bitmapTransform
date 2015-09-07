'use strict';

var Transform = module.exports = exports = {};


// Transforms colorPalette's values for r, g, b
module.exports.Transform = function Transform(paletteInfo) {
  var g, b, r = 0;
  for (var i = 1; i < 257; i += 4) {
    g = Math.floor((parseInt(paletteInfo[i])) * (.50));
    paletteInfo[i] = g;
    b = Math.floor((parseInt(paletteInfo[i + 1])) * (.88));
    paletteInfo[i + 1] = b;
    r = Math.floor((parseInt(paletteInfo[i + 2])) * (.05));
    paletteInfo[i + 2] = r;
  }
  var newColorString = paletteInfo.toString();
  // console.log(newColorString);
  return newColorString;
  // return paletteInfo;
  // console.log(g, b, r);
};

