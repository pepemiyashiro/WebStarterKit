const modules = function(mode) {
    return [
        require('./webpack/webpack-addons/webpack-loaders/webpack.loader.babel')(mode),
        require('./webpack/webpack-addons/webpack-loaders/webpack.loader.postcss')(mode)
    ]
}

const plugins = function(mode) {
    return [
        require('./webpack/webpack-addons/webpack-plugins/webpack.miniCssExtractPlugin')(mode),
        require('./webpack/webpack-addons/webpack-plugins/webpack.cleanWebpackPlugin')(mode),
        require('./webpack/webpack-addons/webpack-plugins/webpack.browserSyncPlugin')(mode),
        require('./webpack/webpack-addons/webpack-plugins/webpack.bundleAnlalyzer')(mode),
    ]
}

module.exports = {
    plugins,
    modules
}
