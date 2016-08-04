var AureliaWebpackPlugin = require("aurelia-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        "app": [ "./src/main-app/index.ts" ]
    },
    output: {
        path: "bundles",
        publicPath: "bundles",
        filename: "[name].js"
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".ts", ".tsx"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            { test: /\.html$/, loader: "html" },
            { test: /\.css$/, loader: "style!css" },
            { test: /\.scss$/, loader: "style!css!sass" }
        ]
    },
    plugins: [
        new AureliaWebpackPlugin()
    ],
    devtool: "source-map",
    devServer: {
        historyApiFallback: true
    }
}
