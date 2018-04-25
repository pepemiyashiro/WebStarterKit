const path = require('path');
const commonPaths = require("./webpack-utils/common-paths");

/**
 * Webpack Plugins
 */
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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

module.exports = {
    entry: {
        main: './src/index.js'
    },
    output: {
        path: commonPaths.outputPath,
        filename: 'main.js'
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
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        })
    ]
};
