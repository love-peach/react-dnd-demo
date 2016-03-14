/**
 * Created by peach on 16-3-14.
 */
var join = require("path").join;
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
/*
 * babel参数
 * */
var babelQuery = {
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports', 'typecheck']
};
module.exports = {
    entry: {
        'index': './src/entry/index.jsx'
    },
    output: {
        path: 'dist/',
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    resolve: {
        modulesDirectories: ['node_modules', (0, join)(__dirname, './node_modules')],
        extensions: ['', '.js', '.jsx', 'less','css'],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: babelQuery
            }, {
                test: /\.jsx$/,
                loader: 'babel',
                query: babelQuery
            },{
                test: /\.less$/,
                loader: 'babel',
                query: babelQuery
            },{
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('css?sourceMap&-restructuring!' + 'autoprefixer-loader')
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract('css?sourceMap!' + 'autoprefixer-loader!' + 'less?{"sourceMap":true,"modifyVars":{}}')
            }
        ]
    },
    plugins: [
        commonsPlugin
    ]
};