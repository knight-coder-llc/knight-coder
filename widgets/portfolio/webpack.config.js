const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, '../../'),
        filename: 'bundle.js'
    },
    node: {
        fs: "empty"
     },
    devServer: {
        inline: false,
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
            filename: "index.html"
        }),
        new Dotenv(),
        new MiniCssExtractPlugin(),
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js",".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: "babel-loader"
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: "ts-loader"
            },
            {
                test: /\.(js|jsx)$/,
                use: "source-map-loader",
                enforce: "pre"
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.(png|jpe?g|gif|woff|ttf|svg|eot|env)$/i,
                use: 'file-loader',
            },
        ]
    },
    stats: 'errors-only',
    node: {
        global: false,
    },
};