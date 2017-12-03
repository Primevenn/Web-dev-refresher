var gulp = require("gulp");
var watch = require("gulp-watch");
var browserSync = require('browser-sync').create();
// Everything in gulp revolves around tasks
// Gulpfile MUST HAVE a default task

// Gulp watch tracks specified files for changes
gulp.task('watch', function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    console.log('./app/index.html');
    browserSync.reload();
  }); // 2 args, 1. File to watch

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('cssInject');
  });

})

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());

});
