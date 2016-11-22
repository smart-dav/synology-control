var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/app');
var SRV_DIR = path.resolve(__dirname, 'src/server');

var config = {
    entry: {
        front: APP_DIR + '/index.jsx',
        back: SRV_DIR + '/main.js',
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].bundle.js'
    },
    target: 'node',
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                include: APP_DIR,
                loader: 'babel'
            },
            {test: /\.less$/, loader: "style!css!less"},
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {test: /\.json$/, loader: "json-loader"}
        ]
    }
};
config.node = {
    console: 'empty',
    fs: 'empty',
    net: 'empty',
    dns: 'empty',
    tls: 'empty'
}
module.exports = config;