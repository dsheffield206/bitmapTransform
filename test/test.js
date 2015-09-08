'use strict';


var fs = require('fs');
var expect = require('chai').expect;
var colPalette = require('../lib/color-map');
var data = require('../lib/buffer');

// Testing that colPalette data exists and is not void
describe('colPalette', function() {
  it('should not be null', function() {
    expect(colPalette[20]).to.not.eql(null);
    console.log('data exists test');
  });
});

// Testing that the data has changed
describe('darken', function() {
  it('should change the data from CPalette', function() {
    expect(colPalette.darken[0]).to.not.eql(0);
    console.log('color change test');
  });
});



exports.test = test;

