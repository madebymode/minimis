const gulp = require('gulp');

gulp.task('default', ['scripts', 'styles']);

gulp.task('watch', function() {
  gulp.watch(SASS_SRC, ['styles']);
  // TODO: JS watch task?
  // gulp.watch(JS_PATHS, ['js']);
});



// ------------------------------
// JS
// ------------------------------

const webpack = require('webpack-stream');
const named = require('vinyl-named');

const JS_CONFIG = require('./webpack.config.js');
const JS_PATHS = ['./docs.js'];
const JS_DEST = './docs/js';

gulp.task('scripts', function() {
  return gulp.src(JS_PATHS)
    .pipe(named())
    .pipe(webpack(JS_CONFIG))
    .pipe(gulp.dest(JS_DEST));
});



// ------------------------------
// Sass
// ------------------------------

const sass = require('gulp-sass');
const sassImporter = { importer: require('npm-sass').importer };
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

const SASS_SRC = ['./docs.scss'];
const SASS_DEST = './docs/css';

gulp.task('styles', function() {
  return gulp.src(SASS_SRC)
    .pipe(sass(sassImporter))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .on('error', sass.logError)
    .pipe(cleanCSS({ inline: ['none'], keepSpecialComments: 0 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SASS_DEST));
});
