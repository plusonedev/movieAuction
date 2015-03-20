// Include gulp
var gulp = require('gulp');

//Include plugins
var plugins = require('gulp-load-plugins')();
//var concat = require('gulp-concat');
//var uglify = require('gulp-uglify');
//var rename = require('gulp-rename');


// Concatenate & Minify JS Files
gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
		.pipe(plugins.concat('main.js'))
		.pipe(plugins.rename({suffix: '.min'}))
		.pipe(plugins.uglify()).on('error', errorHandler)
		.pipe(gulp.dest('build/js'))
});
// Default Task
gulp.task('default', ['scripts']);

// Handle the error
function errorHandler (error) {
  console.log(error.toString());
  this.emit('end');
}
