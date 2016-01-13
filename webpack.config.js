const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    entry: "./home",
    output: {
        filename: "bundle.js",
        library: "home",
        libraryTarget: "var" 
    },

    watch: NODE_ENV == 'development',

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV:   JSON.stringify(NODE_ENV),
            LANG:       JSON.stringify('ru')
        })
    ],

      module: {
        loaders: [
          // Set up jsx. This accepts js too thanks to RegExp
          {
            test: /\.js?$/,
            // Enable caching for improved performance during development
            // It uses default OS directory by default. If you need something
            // more custom, pass a path to it. I.e., babel?cacheDirectory=<path>
            loaders: ['babel?cacheDirectory'],
          }

        ]
      },
};