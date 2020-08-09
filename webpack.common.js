var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        vendor: './src/vendor.js',
        main: './src/index.js'
    },
    plugins: [
        new HtmlWebpackPlugin({             // Html bundle plugin
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader'],   // Linked file load to the html
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: {
                    loader: "file-loader",      // Linked file load to the 'dist' folder
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs"              // Path
                    }
                }
            },
            {
                test: /\.(svg|eot|woff|woff2|ttf)$/i,
                use: {
                    loader: "file-loader",          // Font file move to the 'dist' folder
                    options: {
                        name: "[name].[ext]",
                        outputPath: "fonts"         // Path
                    }
                }
            }
        ],
    }
}