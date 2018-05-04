const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (mode) => {
    return {
        plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css'
            })
        ]
    }
}
