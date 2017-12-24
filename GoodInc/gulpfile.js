const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const tinypng = require('gulp-tinypng-compress');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');


gulp.task('default', ['css', 'js','watch']);

gulp.task('css', function () {
  return gulp.src('./src/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 16 versions'],
        cascade: false
      }))
      .pipe(concat("all.css"))
      .pipe(gulp.dest('public/css'))
});

gulp.task('js', function() {
  gulp.src('./src/js/*.js')
      .pipe(concat('all.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./public/js'))
});

gulp.task('tinypng', function () {
  gulp.src('./src/img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
        key: 'UtR0VibHihT058f4Dbw-lakZ1lmLt2EN',
        log: true
      }))
      .pipe(gulp.dest('./public/img'));
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['css']);
  gulp.watch('./src/js/*.js', ['js']);
  // gulp.watch('./src/img', ['tinypng']);
});


