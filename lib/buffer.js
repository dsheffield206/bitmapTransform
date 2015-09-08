'use strict';

var fs = require('fs');
var data;
var buf = module.exports = new Buffer(8);
var colPalette = require('./color-map');


var rs = fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data){

  if (err) return console.log('error buffering bitmap', err);
    colPalette.darken(data);

    fs.writeFile(__dirname + '/../img/darkenImage.bmp', data, function() {


            fs.writeFile(__dirname + '/../img/invertImage.bmp', data, function() {
               if (err) return console.log(err);
        });
    });
});


exports.data = data;




