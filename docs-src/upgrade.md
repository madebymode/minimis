---
title: Upgrade
name: upgrade
category: Install
hologram: true
---

## Migrating from [mode-front-end 2.11.1](https://github.com/madebymode/mode-front-end/tree/v2.11.1) to minimis 0.1.x

### Replace `css-normalize()` mixin

Remove all `@include css-normalize();` references.

To replace it, either:

- Copy [Normalize.css v3.0.3](https://github.com/necolas/normalize.css/blob/3.0.3/normalize.css) and include it in your app styles.
- Install with npm and include it directly from `node_modules/`:
  - `npm i normalize.css@3.0.3 --save-dev`
  - `@include 'node_modules/normalize.css/normalize.css'

### Replace `css-reset()` mixin

Remove all `@include css-reset();` references.

To replace it, [mode-front-end v2.11.1’s _reset.scss](https://github.com/madebymode/mode-front-end/blob/v2.11.1/resources/assets/sass/generic/_reset.scss) and include it in your app styles.

### Added directional aliases to `o-grid--gutters()`:

Update all `o-grid--gutters()` references so they include a `horizontal-` prefix:

For example, `@o-grid--gutters('sm');` becomes `@o-grid--gutters('horizontal-sm');`.
