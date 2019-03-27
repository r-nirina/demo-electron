"use strict"

const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { VueLoaderPlugin } = require("vue-loader")

module.exports = {
    target: "electron-renderer",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public")
    },
    mode: "development",
    module: {
        rules: [
            {   // Vue
                test: /\.vue$/,
                use: "vue-loader"
            },
            {   // Css
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {   // Fonts
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "fonts"
                        }
                    }
                ]
            },
            {   // Images
                test: /\.(jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]",
                            outputPath: "images"
                        }
                    }
                ]
            },
            {   // HTML
                test: /\.html$/,
                use: "html-loader"
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            favicon: "src/assets/favicon/favicon.ico"
        })
    ],
}
