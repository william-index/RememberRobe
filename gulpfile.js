var gulp = require('gulp'),
    gutil = require('gulp-util'),
    concat = require('gulp-concat'),
    wrap = require('gulp-headerfooter');

var sass = require('gulp-ruby-sass'),
    minifyCss = require('gulp-minify-css');

/*
 * Sass Pipeline
 * Compiles and Minimizes Sass
 */
gulp.task('sass', function () {
  return sass('public/src/stylesheets/scss')
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'));
});

/*
 * javascript Pipeline
 * Concats Javascript classes and main into a single file
 */
gulp.task('javascript', function () {
  return gulp.src(['public/src/javascript/includes/db.js',
                   'public/src/javascript/classes/*.js',
                   'public/src/javascript/main.js'])
    .pipe(concat('main.js', {newLine: ''}))
    .pipe(wrap.header('(function() {'))
    .pipe(wrap.footer('})();'))
    .pipe(gulp.dest('public/js/'));
});

// Watch Methods
gulp.task('watch', function () {
  gulp.watch('public/src/stylesheets/scss/**/*.scss', ['sass']);
  gulp.watch('public/src/javascript/**/*.js', ['javascript']);
});

gulp.task('default', ['sass', 'javascript']);
