var gulp = require("gulp"); // Import node modules
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles', function() {
    // Take contents of CSS files, Manipulate that code, Output it to new file
    // Include return so that gulp is aware when this function completes
    return gulp.src('./app/assets/styles/styles.css')
      .pipe(postcss([cssImport, mixins, nested, cssvars, autoprefixer]))
      .on('error', function(errorInfo) {
        console.log(errorInfo.toString());
        this.end();
      })
      .pipe(gulp.dest('./app/temp/styles/'));
});
