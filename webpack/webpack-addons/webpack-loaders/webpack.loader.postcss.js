const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssLoaderConfig = require('../../../postcss.config');

module.exports = function(mode) {
    return {
        module: {
            rules: [
                {
                    test: /\.(pcss)$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        postcssLoaderConfig(mode)
                    ]
                }
            ]
        }
    }
}
