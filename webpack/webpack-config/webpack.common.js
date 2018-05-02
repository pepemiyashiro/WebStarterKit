const path = require('path');
const glob = require('glob');
const webpackMerge = require('webpack-merge');


const commonPaths = require("../webpack-utils/common-paths");
const entryConfig = require("../webpack-utils/common-split-entries").entryConfig || {};

const baseConfig = {
    main: './src/main.js',
    'web-components.polyfills': './src/libs/web-components.polyfills.js'
}

const mergedConfig = webpackMerge(baseConfig, entryConfig);

module.exports = {
    entry: mergedConfig,
    output: {
        path: commonPaths.outputPath,
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
