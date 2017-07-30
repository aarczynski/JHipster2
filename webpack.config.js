var path = require("path");

module.exports = {

    entry: path.resolve(__dirname, './src/main/resources/static/js/app.jsx'),

    output: {
        path: path.resolve(__dirname, './src/main/resources/static/built'),
        filename: "bundle.js",
        publicPath: "/built/"
    },

    resolve: {
        extensions: ['.js', '.jsx']
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
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    }
}
