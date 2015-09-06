'use strict';


var fs = require('fs');
var expect = require('chai').expect;
var buff = require('../lib/buffer');
var newBuff = require('../lib/newBuffer');
var CPalette = require('../lib/color-map');
var Trans = require('../lib/transform');



// Testing that the paletteInfo Object exists
describe('color palette test', function() {
  before(function (done) {
    fs.readFile(__dirname + '/../img/palette-bitmap.bmp', function(err, data) {
        if (err) throw err;
        var paletteInfo = CPalette.colorPalette(paletteInfo, data);
        debugger;
        done();
        console.log('running color palette test');
    });
  });
  it('should read the buffer data into an Object', function() {
      expect(paletteInfo).to.be.a(Object);
  });
});

// Testing that the object has a width of 100
describe('width test', function() {
  it('should have a width of 100', function() {
    expect(paletteInfo.width).to.eql(100);
    console.log('width test');
  });
});

// Testing that the object has changed after transform
describe('transform test', function() {
  it('should transform the colorPalette', function() {
    expect(Trans.Transform(paletteInfo)).to.not.eql(CPalette.colorPalette(paletteInfo, data));
    console.log('transform test');
  });
});
