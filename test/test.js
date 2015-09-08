'use strict';


var fs = require('fs');
var expect = require('chai').expect;
var buff = require('../lib/buffer');
var CPalette = require('../lib/color-map');


// Testing that CPalette data exists and is not void
describe('CPalette', function() {
  it('should not be null', function() {
    expect(CPalette[20]).to.not.eql(null);
    console.log('data exists test');
  });
});

// Testing that the data has changed
describe('darken', function() {
  it('should change the data from CPalette', function() {
    expect(CPalette.darken(data)).to.not.eql(CPalette.invert(data));
    console.log('color change test');
  });
});


exports.test = test;

