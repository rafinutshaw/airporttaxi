const mix = require("laravel-mix");

// For Vue JS Coponents/Pages lazy loading
mix.webpackConfig({
    output: {
        chunkFilename: "js/chunks/[name].js?id=[chunkhash]",
        publicPath: "/"
    }
}).version();

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css");

