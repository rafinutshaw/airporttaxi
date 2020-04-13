const mix = require("laravel-mix");

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

mix.js("resources/js/app.js", "public/js").sass(
    "resources/sass/app.scss",
    "public/css"
);

// .js(
//     [
//         "./resources/js/theme/jquery.min.js",
//         "./resources/js/theme/easing.min.js",
//         "./resources/js/theme/hoverIntent.js",
//         "./resources/js/theme/superfish.min.js",
//         "./resources/js/theme/jquery.ajaxchimp.min.js",
//         "./resources/js/theme/jquery.magnific-popup.min.js",
//         "./resources/js/theme/jquery-ui.js",
//         "./resources/js/theme/jquery.nice-select.min.js",
//         "./resources/js/theme/mail-script.js",
//         "./resources/js/theme/main.js"
//     ],
//     "public/js/theme.js"
// )
