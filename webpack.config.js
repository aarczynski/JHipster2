var path = require("path");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    entry: path.resolve(__dirname, './src/main/resources/static/js/app.js'),

    output: {
        path: path.resolve(__dirname, './src/main/resources/static/built'),
        filename: "bundle.js",
        publicPath: "/built/"
    },

    devServer: {
        inline: true,
        port: 9090,
        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
}
