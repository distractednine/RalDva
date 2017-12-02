//"use strict";

//var webpack = require("webpack");
var webpack = require("webpack");

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);
const path = require('path');

module.exports = {
    entry: "./Scripts/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./bundle.js"
    },
    devServer: {
        contentBase: "/dist",
        host: "localhost",
        port: 43546
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
};