'use strict';

var gulp = require('gulp'),
    gulpif = require('gulp-if'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    htmlminify = require('gulp-htmlmin'),
    cssnano = require('gulp-cssnano');

var config = require('./config');

gulp.task('htmlmin', ['wiredep', 'sass'], function () {

  return gulp.src(config.src + '*.html')
    .pipe(useref())
    //for css nano options, visit http://cssnano.co/optimisations/
    .pipe(gulpif('*.css', cssnano({
        discardComments: {
            removeAll: true
        },
        autoprefixer: false
    })))
    .pipe(gulpif('*.js', uglify()))
    .pipe(gulpif('*.html', htmlminify({collapseWhitespace: true})))
    .pipe(gulp.dest(config.dist));
});