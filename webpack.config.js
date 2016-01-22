const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        home: './home.js',
        about: './about.js',
    },
    output: {
        path: __dirname + '/public',
        filename: "[name].js",
        library: "[name]"
    },

    watch: NODE_ENV == 'development',

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    devtool: NODE_ENV == 'development' ? "cheap-inline-module-source-map" : null,

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV:   JSON.stringify(NODE_ENV),
            LANG:       JSON.stringify('ru')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            cunks: ['about', 'home']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common-goods',
            cunks: ['shop', 'order']
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
    },

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

if (NODE_ENV == 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}
