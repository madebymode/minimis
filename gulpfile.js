const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Sass
const SASS_PATHS = ['./docs.scss'];
const SASS_DEST = './docs/css';

gulp.task('sass', function() {
  return gulp.src(SASS_PATHS)
    .pipe(sass())
    .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .on('error', sass.logError)
    .pipe(cleanCSS({ inline: ['none'], keepSpecialComments: 0 }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SASS_DEST));
});

// Default
gulp.task('default', ['sass']);

// Watch
gulp.task('watch', function() {
  gulp.watch(SASS_PATHS, ['sass']);
});
