const path = require('path');
const glob = require('glob');

const getObjectPropertyValue = require('./webpack-utils/get-cmd-target-args');
const commonConfig = require('./webpack-config/webpack.common');
const webpackMerge = require('webpack-merge');

/**
 * Base Webpack Configuration
 */



module.exports = (...env) => {

    console.log(getObjectPropertyValue(env[1], 'mode'));

    const mergedConfig = webpackMerge(commonConfig);

    return mergedConfig;
}
