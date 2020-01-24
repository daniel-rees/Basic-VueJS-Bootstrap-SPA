const mix = require('laravel-mix');

mix.copyDirectory( './node_modules/@fortawesome/fontawesome-free/webfonts', './public/fonts/font-awesome' );

mix.js('resources/js/app.js', 'public/js')
  .sass('resources/sass/app.scss', 'public/css')
  .options({
    processCssUrls: false,
  });
