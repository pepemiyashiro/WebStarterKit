const postCSSPluginConfig = [
    require('postcss-import'),
    require('postcss-cssnext')({
        browsers: ['last 2 versions']
    }),
    require('postcss-nested'),
    require('postcss-reporter'),
    require('postcss-remove-root'),
    require('postcss-responsive-type'),
    require('css-mqpacker')({
        sort: true
    })
]

const pluginsForProductionOnly = [
    require('cssnano')({
        autoprefixer: false,
        safe: true
    })
]

const pushProductionPlugin = function() {
    return postCSSPluginConfig.concat(pluginsForProductionOnly);

}

const postCSSConfiguration = function(mode) {
    const isDev = mode === "development" ? true : false;
    return {
        loader: 'postcss-loader',
        options: {
            plugins: isDev ? postCSSPluginConfig : pushProductionPlugin()
        }
    }
}

module.exports = postCSSConfiguration;
