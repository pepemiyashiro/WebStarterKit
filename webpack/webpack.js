const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');

const getObjectPropertyValue = require('./webpack-utils/get-cmd-target-args');
const commonConfig = require('./webpack-config/webpack.common');

// Plugins
const plugins = [
    require('./webpack-partials/webpack-plugins/webpack.miniCssExtractPlugin'),
    require('./webpack-partials/webpack-plugins/webpack.cleanWebpackPlugin'),
    require('./webpack-partials/webpack-plugins/webpack.browserSyncPlugin')
]

// Modules
const modules = [
    require('./webpack-partials/webpack-loaders/webpack.loader.babel'),
    require('./webpack-partials/webpack-loaders/webpack.loader.postcss')
]

/**
 * Base Webpack Configuration
 */
 const mainWebpackConfig = webpackMerge(
    // Base Configuration
    commonConfig,
    // Loading Modules [Loader]
    ...modules,
    // Loading Plugins
    ...plugins
 )


module.exports = (...env) => {
    // console.log(getObjectPropertyValue(env[1], 'mode'));
    const mergedConfig = mainWebpackConfig;
    return mergedConfig;
}
