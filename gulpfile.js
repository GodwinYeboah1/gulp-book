var gulp = require('gulp');
var concat = require('gulp-concat');
var myth = require('gulp-myth');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify'); // Newly Added 
var jshint = require('gulp-jshint'); // Newly Added 
var imagemin = require('gulp-imagemin'); // Newly Added

// Styles Task
gulp.task('styles', function() {
    // Code goes here
    return gulp.src('app/css/*.css')
        .pipe(concat('all.css'))
        .pipe(myth())
        .pipe(gulp.dest('dist'));
});

// Styles Task
gulp.task ('scripts', function(){
    // code goes here
    return gulp.src('app/js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

// Image Task

gulp.task('images',function(){
    return gulp.src('app/images/*js')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

// Watch Task

gulp.task('watch', function() {
    gulp.watch('app/css/*.css', gulp.series('styles'));
    gulp.watch('app/js/*.js', gulp.series('scripts'));
    gulp.watch('app/images/*', gulp.series('images'));
  });

// Default Task
gulp.task('default',gulp.parallel('styles','scripts','images','watch'));