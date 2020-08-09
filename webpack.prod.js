const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: "[name].[contentHash].css" }),     // Extract css file to 'dist' folder
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    MiniCssExtractPlugin.loader, // Extract css into file
                    'css-loader', // Turn css into commonjs
                    'sass-loader' // Turn scss to css
                ],
            }
        ]
    }
})