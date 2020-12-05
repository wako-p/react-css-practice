const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                terserOptions: {
                    output: {
                        comments: false
                    },
                    compress: {
                        drop_console: true
                    }
                }
            })
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/presentation/view/public/index.html"),
            favicon: path.resolve(__dirname, "src/presentation/view/public/favicon.ico"),
            filename: "index.html",
        }),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, "src/presentation/view/public/index.hta"),
            filename: "index.hta",
            inject: false
        })
    ]
});
