'use strict';

var expect = require('chai').expect;
var fs = require('fs');

describe('an asynch test', function() {
  it('should test fs', function(done) {
    fs.readFile('./lib/non-palette-bitmap.bmp', function() {
      expect(err).to.eql(null);
      expect(data).to.eql('utf8');
      debugger;
      done();
    });
  });
});

describe('another test', function() {
  it('should do another test', function() {
    expect(err).to.eql(null);
    console.log('another test');
  });
});
