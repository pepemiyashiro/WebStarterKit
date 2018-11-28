const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');
const commonPaths = require("../webpack-utils/common-paths");
const entryConfig = require("../webpack-utils/common-split-entries").entryConfig || {};

/**
 * Common Configuration
 * configuration shared between Development and Production
 */

// ! these file should be added dynamically, from a configuration file. for vendors and main
const baseConfig = {
    main: './src/main.js',
    'web-components.polyfills': './src/libs/web-components.polyfills.js'
}

const mergedConfig = webpackMerge(baseConfig, entryConfig);

module.exports = {
    entry: mergedConfig,
    output: {
        path: commonPaths.outputPath,
        filename: 'js/[name].bundle.js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
