const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');

const getObjectPropertyValue = require('./webpack-utils/get-cmd-target-args');
const commonConfig = require('./webpack-config/webpack.common');

// Plugins
const plugins = require('../webpack.addons').plugins;

// Modules
const modules = require('../webpack.addons').modules;

/**
 * Base Webpack Configuration
 */
 const mainWebpackConfig = function(mode) {
    return webpackMerge(
        // Base Configuration
        commonConfig,
        // Loading webpack config depending on mode
        require(`./webpack-config/webpack.${mode}.js`),
        // Loading Modules [Loaders]
        ...modules(mode),
        // Loading Plugins
        ...plugins(mode)
     )
 }


module.exports = (...env) => {
    return mainWebpackConfig(getObjectPropertyValue(env[1], 'mode'));
}
