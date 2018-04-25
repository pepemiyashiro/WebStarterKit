const path = require('path');
const webpackMerge = require("webpack-merge");

module.exports = {
    outputPath: path.resolve(__dirname, "../../", "dist", "assets"),
    srcPath: path.resolve(__dirname, "../../", "src")
}
