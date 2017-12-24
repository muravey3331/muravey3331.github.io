var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('default', ['scssConcat', 'sass', 'watch']);

gulp.task('scssConcat', function(){
  gulp.src([ './css/reset.scss', './css/variables.scss', './css/style.scss'])
      .pipe(concat('main.scss'))
      .pipe(gulp.dest('./css/'));

});

gulp.task('sass', function () {
  gulp.src('./css/main.scss')
      .pipe(sass({errLogToConsole: true}))
      .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
  gulp.watch('./css/**/*.scss', ['scssConcat']);
  gulp.watch('./css/**/*.scss', ['sass']);

});