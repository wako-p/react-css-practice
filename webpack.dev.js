const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/presentation/view/public/index.html"),
            favicon: path.resolve(__dirname, "src/presentation/view/public/favicon.ico"),
            filename: "index.html",
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        port: 3000,
        open: true,
        hot: true,
        inline: true
    }
});
