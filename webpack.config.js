/**
 * Created by peach on 16-3-14.
 */
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

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
        extensions: ['', '.jsx', '.less'],
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/, loader: 'babel!jsx?harmony'
            }
        ]
    },
    plugins: [
        commonsPlugin
    ]
};