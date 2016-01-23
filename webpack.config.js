const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        app: './app'
    },
    output: {
        path: __dirname + '/public/js',
        publicPath: '/js/', 
        filename: "[name].js",
    },

    watch: NODE_ENV == 'development',

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new webpack.NoErrorsPlugin()
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
