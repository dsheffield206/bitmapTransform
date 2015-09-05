'use strict';

var Transform = module.exports = exports = {};


// Transforms colorPalette's values for r, g, b
Transform = function(colorPalette) {
  var g, b, r = 0;
  for (var i = 1; i < 13; i += 4) {
    g = Math.floor((parseInt(colorPalette[i])) * (.50));
    colorPalette[i] = g;
    b = Math.floor((parseInt(colorPalette[i + 1])) * (.88));
    colorPalette[i + 1] = b;
    r = Math.floor((parseInt(colorPalette[i + 2])) * (.05));
    colorPalette[i + 2] = r;
  }
  console.log(g, b, r);
};

