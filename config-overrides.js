//const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    webpack: function (config, env) {
        config.mode = 'development';
        config.output = {
            ...config.output,
            chunkFilename: '[id].chunk.js',
            filename: '[id].js',
            publicPath: '',
            globalObject: 'this',

        };
        config.optimization = {
            ...config.optimization,
            nodeEnv: 'development',
            minimize: false,
            splitChunks: {
                cacheGroups: {
                    default: false,
                },
            },
            removeEmptyChunks: true,
            runtimeChunk: false,
        }
        /*config.plugins.push(new MiniCssExtractPlugin({
            filename: 'main.css',
            chunkFilename: '[id].css',
        }));*/
        return config;
    }
};
