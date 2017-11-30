# mode-sass

## Install

```
npm i --save mode-sass
```

For [gulp](https://gulpjs.com/) build:

```
npm i --save-dev gulp gulp-sass npm-sass
```

## Sample `index.scss`

```scss
@import 'mode-sass';
```

## Sample `gulpfile.js`

```js
const gulp = require('gulp');
const sass = require('gulp-sass');
const sassImporter = { importer: require('npm-sass').importer };

// Sass
gulp.task('sass', function () {
  return gulp.src('./resources/assets/sass/**/*.scss')
    .pipe(sass(sassImporter))
    .pipe(gulp.dest('./public/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// Default
gulp.task('default', ['sass']);
```

## [stylelint](http://stylelint.io/)

To keep your Sass clean:

```
npm i --save-dev stylelint-config-property-sort-order-smacss
cp node_modules/mode-sass/.editorconfig .editorconfig
cp node_modules/mode-sass/.stylelintrc .stylelintrc
```
