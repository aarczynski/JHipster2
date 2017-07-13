var path = require("path");
module.exports = {

    entry: path.resolve(__dirname, './src/main/resources/static/js/main.js'),

    output: {
        path: path.resolve(__dirname, 'src/main/resources/static/built'),
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

                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
}