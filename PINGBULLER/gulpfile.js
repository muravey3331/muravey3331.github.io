var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var tinypng = require('gulp-tinypng-compress');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass','compress', 'watch']);

gulp.task('sass', function () {
  return gulp.src('./develop/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 16 versions'],
      cascade: false
    }))
    .pipe(concat("all.css"))
    .pipe(gulp.dest('./build/css'));
});


gulp.task('tinypng', function () {
  gulp.src('./develop/img/**/*.{png,jpg,jpeg}')
    .pipe(tinypng({
      key: 'UtR0VibHihT058f4Dbw-lakZ1lmLt2EN',
      sigFile: 'build/img/.tinypng-sigs',
      log: true
    }))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('compress', function() {
  gulp.src('./develop/js/*.js')
    .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
});


gulp.task('watch', function () {
  gulp.watch('./develop/sass/**/*.scss', ['sass']);
  gulp.watch('./develop/js/*.js', ['compress']);
});