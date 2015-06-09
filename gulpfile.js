var gulp = require('gulp')
var mocha = require('gulp-mocha')

// Test
// ----

gulp.task('test', function () {
  gulp.src('test/*.js')
    .pipe(mocha())
})
