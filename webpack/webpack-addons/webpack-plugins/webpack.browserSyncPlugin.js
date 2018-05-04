const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const browserSyncConfig = require('../../../browserSync.config');

module.exports = function(mode) {
    return {
        plugins: [
            new BrowserSyncPlugin(browserSyncConfig)
        ]
    }
}
