const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "src/presentation/view/index.tsx"),
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            ".ts",
            ".tsx",
            ".js",
            ".jsx",
            ".json"
        ],
        alias: {
            "src": path.resolve(__dirname, "src"),
            "@application": path.resolve(__dirname, "src/application"),
            "@domain": path.resolve(__dirname, "src/domain"),
            "@infrastructure": path.resolve(__dirname, "src/infrastructure"),
            "@presentation": path.resolve(__dirname, "src/presentation"),
            "@usecase": path.resolve(__dirname, "src/usecase"),
        }
    }
};
