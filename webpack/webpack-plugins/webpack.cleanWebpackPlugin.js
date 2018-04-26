const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    plugins: [
        new CleanWebpackPlugin(
            [ 'dist', 'assets' ],
            {
                root: path.resolve(__dirname, "../"),
                exclude: ['index.html'],
                verbose: false
            }
        )
    ]
}
