const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: './'
    },
    module: {
        rules: [{
            test: /\.(jsx|js)$/,
            include: path.resolve(__dirname, 'src'),
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        'react'
                    ]
                }
            }]
        }]
    }
};