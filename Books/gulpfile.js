const gulp = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const tinypng = require('gulp-tinypng-compress');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');

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