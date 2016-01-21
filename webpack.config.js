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

    resolve: {
        modulesDirectoties: ['node_modules'],
        extensions: ['', '.js']
    },

    resolveLoader: {
        modulesDirectoties: ['node_modules/'],
        moduleTemplates: ['*-loader', '*'],
        extensions: ['', '.js']
    }

    module: {
    loaders: [
        {
            test: /\.js$/,
            loader: `babel`,
            exclude: /node_modules/
        },
      ]
    }
};
