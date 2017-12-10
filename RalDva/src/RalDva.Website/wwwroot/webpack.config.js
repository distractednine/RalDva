"use strict";

var webpack = require("webpack");

const path = require('path');

module.exports = {
    entry: "./Scripts/index.jsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "./bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    devServer: {
        contentBase: "/dist",
        host: "localhost",
        port: 43546
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            }
            //,
            //{
            //    test: /\.css$/,
            //    use: ['style-loader', 'css-loader', {
            //        loader: 'postcss-loader',
            //        options: {
            //            plugins: () =>[require('autoprefixer')]
            //        }
            //    }]
            //}
        ]
    }
};