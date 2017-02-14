'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('scss', function () {
    return gulp.src('assets/style/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/style/'))
//    génère un dossier
});

gulp.task('default', ['scss'],function () {
    console.log('worked')
})