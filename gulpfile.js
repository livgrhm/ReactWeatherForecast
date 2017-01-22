var gulp = require('gulp'),
	sass = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	del = require('del'),
	livereload = require('gulp-livereload');

// Clean up
gulp.task('clean', function() {
    return del('src/css');
});

// Process Sass
gulp.task('styles', function() {
  return sass('src/sass/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('src/css'));
});

// Default tasks
gulp.task('default', ['clean'], function() {
    gulp.start('styles');
});

// Watch for Sass changes
gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss', ['styles']);
	livereload.listen();
});
