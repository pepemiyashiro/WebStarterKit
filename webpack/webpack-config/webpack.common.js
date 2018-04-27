const path = require('path');
const glob = require('glob');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpackMerge = require('webpack-merge');


const commonPaths = require("../webpack-utils/common-paths");
const entryConfig = require("../webpack-utils/common-split-entries").entryConfig || {};

/**
 * PostCSS Plugins
 */
const postcssImport = require('postcss-import');
const postcssReporter = require('postcss-reporter');
const postcssCssnext = require('postcss-cssnext');
const postcssNested = require('postcss-nested');
const postcssRemoveRoot = require('postcss-remove-root');
const postcssResponsiveType = require('postcss-responsive-type');
const cssMqpacker = require('css-mqpacker');
const cssnano = require('cssnano');


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
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|pcss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: 'inline',
                            plugins: () => [
                                postcssImport,
                                postcssReporter(),
                                postcssCssnext(),
                                postcssResponsiveType,
                                postcssNested,
                                postcssRemoveRoot,
                                cssMqpacker({
                                    sort: true
                                }),
                                // cssnano({
                                //     autoprefixer: false,
                                //     safe: true
                                // })
                            ]
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
