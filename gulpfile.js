'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gulpMocha = require('gulp-mocha');
var chai = require('chai');
var bufData = require('./lib/buffer');

gulp.task('buff', function(){
  return gulp.src('./lib/buffer.js');
  // .pipe(gulp.dest('lib'));
});

gulp.task('trans',['oldColor'], function(){
  return gulp.src('./lib/transform.js');
  // .pipe(jshint);
  // console.log('running trans from gulp');
});

gulp.task('oldColor',['buff'], function(){
  return gulp.src('./lib/color-maps.js');
  // .pipe(gulp.dest('lib'));
});

gulp.task('default', ['buff','oldColor']);

gulp.task('jshint', function() {
  return gulp.src(['buffer.js', 'test/**/*.js', 'lib/**/*.js', 'gulpfile.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// gulp.task('test', function() {
//   return gulp.src('test/**/*.js')
//     .pipe(gulpMocha({reporter: 'nyan'}));
// });


