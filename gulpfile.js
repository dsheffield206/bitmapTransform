'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var chai = require('chai');

gulp.task('jshint', function() {
  return gulp.src(['buffer.js', 'test/**/*.js', 'lib/**/*.js', 'bin/xxx', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('test', function() {
  return gulp.src('test/**/*.js')
    .pipe(gulpMocha({reporter: 'nyan'}));
});

gulp.task('default', ['jshint', 'test']);