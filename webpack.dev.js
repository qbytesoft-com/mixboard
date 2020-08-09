const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
    mode: "development",
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    'style-loader', // Inject css to the dom
                    'css-loader', // Turn css into commonjs
                    'sass-loader' // Turn scss to css
                ],
            }
        ]
    }
})