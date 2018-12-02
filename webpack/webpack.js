const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');
const getObjectPropertyValue = require('./webpack-utils/get-cmd-target-args');
const webpackCommonConfig = require('./webpack-config/webpack.common');
const plugins = require('../webpack.addons').plugins;
const modules = require('../webpack.addons').modules;

/**
 * Base Webpack Configuration
 */

/**
 * This method compose the configurations depending on the mode
 * @param {String} mode
 */
const mainWebpackConfig = function(mode) {
    return webpackMerge(
        // Common webpack Configuration
        webpackCommonConfig,
        // Loads webpack config by mode
        require(`./webpack-config/webpack.${mode}.js`),
        // Loads the loaders to the webpack module
        ...modules(mode),
        // Loads the plugins
        ...plugins(mode)
     )
 }


module.exports = (...env) => {
    return mainWebpackConfig(getObjectPropertyValue(env[1], 'mode'));
}
