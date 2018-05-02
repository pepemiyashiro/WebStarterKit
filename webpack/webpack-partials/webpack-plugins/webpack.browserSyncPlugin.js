const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const browserSyncConfig = require('../../../browserSync.config');

module.exports = {
    plugins: [
        new BrowserSyncPlugin(browserSyncConfig)
    ]
}
