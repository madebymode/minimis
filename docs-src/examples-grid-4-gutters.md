---
title: 'Responsive Grid: Gutters'
name: 5-responsive-grid-gutters
category: Examples
hologram: true
---

```html_example
<div class="o-grid  o-grid--gutters-sm  /  u-margin-bottom-lg">
  <div class="o-grid__item  /  u-order-2@sm  /  u-width-1/1  u-width-1/2@sm  u-width-2/3@md">
    <picture>
      <source srcset="https://placehold.it/800x400" media="(min-width: 48em)">
      <source srcset="https://placehold.it/400x400" media="(min-width: 30em)">
      <img class="u-object-fit-cover-100%" src="https://placehold.it/400x200" alt="">
    </picture>
  </div>
  <div class="o-grid__item  /  u-order-1@sm  /  u-width-1/1  u-width-1/2@sm  u-width-1/3@md">
    <p class="u-padding-horizontal-sm@lt-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, eaque amet sequi reiciendis, explicabo consequuntur minus, necessitatibus tenetur molestiae saepe tempora repellat officiis cumque alias consectetur consequatur dolore odio&nbsp;quos.</p>
  </div>
  <!-- TODO: Need !important for margin/padding utilities: `u-margin-left-0  /  u-padding-left-0` -->
  <div class="o-grid__item  /  o-grid  o-grid--gutters-sm  /  u-order-3@sm  /  u-width-1/1  u-width-2/3@md" style="margin-left: 0; padding-left: 0;">
    <div class="o-grid__item  /  u-order-3@sm  /  u-width-1/1  u-width-1/2@sm">
      <picture>
        <source srcset="https://placehold.it/400x400" media="(min-width: 30em)">
        <img class="u-object-fit-cover-100%" src="https://placehold.it/400x200" alt="">
      </picture>
    </div>
    <div class="o-grid__item  /  u-order-4@sm  /  u-width-1/1  u-width-1/2@sm">
      <p class="u-padding-horizontal-sm@lt-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, eaque amet sequi reiciendis, explicabo consequuntur minus, necessitatibus tenetur molestiae saepe tempora repellat officiis cumque alias consectetur consequatur dolore odio&nbsp;quos.</p>
    </div>
    <div class="o-grid__item  /  u-order-6@sm  /  u-width-1/1  u-width-1/2@sm">
      <picture>
        <source srcset="https://placehold.it/400x400" media="(min-width: 30em)">
        <img class="u-object-fit-cover-100%" src="https://placehold.it/400x200" alt="">
      </picture>
    </div>
    <div class="o-grid__item  /  u-order-5@sm  /  u-width-1/1  u-width-1/2@sm">
      <p class="u-padding-horizontal-sm@lt-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, eaque amet sequi reiciendis, explicabo consequuntur minus, necessitatibus tenetur molestiae saepe tempora repellat officiis cumque alias consectetur consequatur dolore odio&nbsp;quos.</p>
    </div>
  </div><!-- /.o-grid -->
  <div class="o-grid__item  /  u-order-4@sm  /  u-width-1/1  u-width-1/3@md">
    <picture>
      <source srcset="https://placehold.it/400x800/969696/cccccc" media="(min-width: 48em)">
      <source srcset="https://placehold.it/800x400/969696/cccccc" media="(min-width: 30em)">
      <img class="u-object-fit-cover-100%" src="https://placehold.it/400x200/969696/cccccc" alt="">
    </picture>
  </div>
</div><!-- /.o-grid -->
```
