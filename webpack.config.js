const path = require("path");

module.exports = {

    entry: path.resolve(__dirname, './frontend/js/app.jsx'),

    output: {
        path: path.resolve(__dirname, './src/main/resources/static/built'),
        filename: "bundle.js",
        publicPath: "/built/"
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devServer: {
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
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|svg)$/,
                use: ['file-loader']
            }
        ]
    }
}
