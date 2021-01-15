const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const DotEnv = require('dotenv').config({
    path: path.join(__dirname, '.env')
});

module.exports = {
    entry: ['./src/index.tsx'],
    output: {
        path: path.resolve(__dirname, './build'),
        // path: path.join(__dirname,'..','..','/assets','/js','/compiled','/typesportfolio'),
        filename: 'bundle.js'
    },
    node: {
        fs: "empty"
     },
    devServer: {
        historyApiFallback: true,
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html",
            filename: "index.html"
        }),
        new webpack.DefinePlugin({
            "process.env": DotEnv.parsed
        }),
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
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: "ts-loader"
                  }
                ]
            },
            {
                test: /\.(js|jsx)$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.(css)$/i,
                use: ['style-loader','css-loader']
                // use: ['style-loader', 'css-loader', 'sass-loader']
                // use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif|woff|ttf|svg|eot|env)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
            },
        ]
    },
    stats: 'errors-only'
};