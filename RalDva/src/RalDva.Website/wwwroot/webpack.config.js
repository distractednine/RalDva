"use strict";

var webpack = require("webpack");
var path = require('path');
var rootPath = path.resolve(__dirname);

module.exports = {
    entry: "./Scripts/index.jsx",
    output: {
        path: path.resolve(rootPath, 'dist'),
        filename: "./bundle.js",
        sourceMapFilename: "bundle.map"
    },
    devtool: "#source-map",
    devServer: {
        contentBase: "/dist",
        host: "localhost",
        port: 43546
    },
    //resolve: {
    //    extensions: ['.js', '.jsx'],
    //    alias: {
    //        test: 'test'
    //        //home: 'components/home',
    //        //utility: 'components/common/utility',
    //        //textService: 'services/textService'
    //    }
    //},
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['env', 'stage-0', 'react']
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                query: {
                    presets: ['env', 'stage-0'],
                    plugins: ['babel-plugin-transform-es2015-arrow-functions', 'transform-class-properties']
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