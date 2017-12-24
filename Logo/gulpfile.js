var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cssMin = require('gulp-cssmin');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task('default', ['sass','cssMin','watch']);

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss',['sass']);
  gulp.watch('./src/css/**/*.css',['cssMin']);

});

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/css'));
});
//gulp.task('cssConcat', function () {
//  gulp.src('./css/**/*.css')
//      .pipe(concatCss('all.css'))
//      .pipe(gulp.dest('./dist'))
//});

gulp.task('cssMin', function () {
  gulp.src('./src/css/**/*.css')
      .pipe(concatCss('all.min.css'))
      .pipe(cssMin())
      .pipe(gulp.dest('./public/dist'))
});

