const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');

const getObjectPropertyValue = require('./webpack-utils/get-cmd-target-args');
const commonConfig = require('./webpack-config/webpack.common');

// Plugins
const plugins = [
    require('./webpack-plugins/webpack.miniCssExtractPlugin'),
    require('./webpack-plugins/webpack.cleanWebpackPlugin')
]

/**
 * Base Webpack Configuration
 */

 const mainWebpackConfig = webpackMerge(
    // Base Configuration
    commonConfig,
    ...plugins
 )


module.exports = (...env) => {

    console.log(getObjectPropertyValue(env[1], 'mode'));

    const mergedConfig = mainWebpackConfig;

    return mergedConfig;
}
