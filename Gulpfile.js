// include the required packages.
var gulp = require('gulp');
var stylus = require('gulp-stylus');


// Get and render recursive stylus files
gulp.task('stylus', function () {
	gulp.src('./styl/**/*.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./css'));
});


// Default gulp task to run
gulp.task('default', ['stylus']);

// Gulp Watch
gulp.task('watch', ['stylus'], function() {
  gulp.watch('./**/*.styl', ['stylus']);
});