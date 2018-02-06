const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const config = {
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "../", "distDev"),
        filename: '[name].js'
    },
    plugins: [ 
        new webpack.LoaderOptionsPlugin({
            minimize: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor_chunk.js"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons_chunk.js"
        }),
        new ExtractTextPlugin("styles.css")
    ]
};
module.exports = config;