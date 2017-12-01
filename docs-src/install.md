---
title: Install
name: install
category: Install
hologram: true
---
## 1. Install with [npm](https://docs.npmjs.com/getting-started/what-is-npm)

```
npm i minimis --save-dev
```

## 2. Copy starter kit

```
mkdir -p resources/assets/sass/
rsync -avz node_modules/minimis/starter-kit/ resources/assets/sass/
```

## 3. Build with [gulp](https://gulpjs.com/)

```
npm i gulp gulp-sass npm-sass gulp-sourcemaps gulp-autoprefixer gulp-clean-css --save-dev
```

### Sample `gulpfile.js`

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassImporter = { importer: require('npm-sass').importer };
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

// Sass
const SASS_SRC = ['./resources/assets/sass/*.scss'];
const SASS_DEST = './public/css';

gulp.task('sass', function() {
  return gulp.src(SASS_SRC)
    .pipe(sass(sassImporter))
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
  gulp.watch(SASS_SRC, ['sass']);
});
```

## 4. Keep clean code with [EditorConfig](http://editorconfig.org/) and [stylelint](http://stylelint.io/)

```
npm i stylelint-config-property-sort-order-smacss --save-dev
cp node_modules/minimis/.editorconfig .editorconfig
cp node_modules/minimis/.stylelintrc .stylelintrc
```
