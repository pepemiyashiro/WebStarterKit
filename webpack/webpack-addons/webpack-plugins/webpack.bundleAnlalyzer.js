const isDev = require('../../webpack-utils/is-dev');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (mode) => {
    const isDevelopment = isDev(mode);
    return (
        isDevelopment
            ? {
                plugins: [
                    new BundleAnalyzerPlugin()
                ]
            }
            : {}
    );
}
