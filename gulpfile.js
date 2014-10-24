var gulp = require('gulp');
var ngAnnotate = require('gulp-ng-annotate');

gulp.task('default', ['annotate'], function () {
});

gulp.task('annotate', function () {
  return gulp.src('static/javascripts/**/*.js')
    .pipe(ngAnnotate())
    .pipe(gulp.dest('dist/static/javascripts/'));
});
