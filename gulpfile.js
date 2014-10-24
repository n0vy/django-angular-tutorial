var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');
var uglify = require('gulp-uglify');

gulp.task('default', ['annotate', 'uglify'], function () {
});

gulp.task('annotate', function () {
  return gulp.src('static/javascripts/**/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/static/javascripts/'));
});

gulp.task('uglify', function () {
  return gulp.src('static/javascripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist/static/javascripts/'));
});
