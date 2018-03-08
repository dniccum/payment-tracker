const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.scripts([
        'resources/assets/js/jquery.min.js',
        'resources/assets/js/bootstrap.min.js',
        'resources/assets/js/bootstrap-slider.js',
    ], 'public/build/js/vendor.js')
    .scripts([
        'resources/assets/js/scripts.js'
    ], 'public/build/js/scripts.js')
    .styles([
        'resources/assets/css/bootstrap.min.css',
        'resources/assets/css/bootstrap-theme.min.css',
        'resources/assets/css/bootstrap-slider.css',
    ], 'public/build/css/vendor.css')
    .styles([
        'resources/assets/css/style.css',
    ], 'public/build/css/style.css');
