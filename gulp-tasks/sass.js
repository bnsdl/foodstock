'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssassets = require('postcss-assets'),
    stream = require('browser-sync').stream;

var config = require('./config');

function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

gulp.task('sass', function() {
  return gulp.src(config.src + 'styles/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'nested',
      precision: 10,
      includePaths: []
    }))
    .on('error', handleError)
    .pipe(postcss([
      autoprefixer(['ie 8-11','last 2 versions', "> 1%"]),
      postcssassets({
        loadPaths: [config.img],
        basePath: config.src
      })
    ]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest( config.src + 'css'))
    .pipe(stream());
});