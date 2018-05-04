const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const commonPaths = require('../../webpack-utils/common-paths');

module.exports = function(mode) {
    return {
        plugins: [
            new CleanWebpackPlugin(
                [ 'dist', 'assets' ],
                {
                    root: commonPaths.distPath,
                    exclude: ['index.html'],
                    verbose: false
                }
            )
        ]
    }
}
