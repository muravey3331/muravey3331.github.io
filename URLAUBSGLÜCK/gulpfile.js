'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var spritesmith = require('gulp.spritesmith');
var imageOptim = require('gulp-imageoptim');



gulp.task('default', ['watch', 'sass', 'cssmin']);

gulp.task('sass', function () {
  return gulp.src('./src/styles/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/css'));
});

//gulp.task('cssConcat', function() {
//  return gulp.src('./css/*.css')
//      .pipe(concat('all.css'))
//      .pipe(gulp.dest('./dist/'));
//});

gulp.task('cssmin', function () {
  return gulp.src('./src/css/style.css')
      .pipe(concat('all.min.css'))
      .pipe(cssmin())
      .pipe(gulp.dest('./public/dist/'));
});

//gulp.task('images', function() {           // not available on Windows & Linux
//  return gulp.src('src/img1/**/*.png')
//      .pipe(imageOptim.optimize())
//      .pipe(gulp.dest('public/img1'));
//});

gulp.task('sprite', function () {
  var spriteData = gulp.src('src/image/*.png')
      .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css',
        padding: 2
      }));
  return spriteData.pipe(gulp.dest('public/sprites/'));
});

gulp.task('watch', function () {
  gulp.watch('./src/styles/**/*.scss', ['sass']);
  //gulp.watch('./css/*.css', ['cssConcat']);
  gulp.watch('./src/css/*.css', ['cssmin']);
});