const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const path = require('path');
const webpack = require('webpack');

// function MyPlugin(options) {}
// MyPlugin.prototype.apply = function(compiler) {
//     compiler.plugin('compilation', function(compilation) {
//         console.log('The compiler is starting a new compilation...');
//         compilation.plugin('html-webpack-plugin-before-html-processing', function(htmlPluginData, callback) {
//             console.log(htmlPluginData);
//             htmlPluginData.html += 'The magic footer';
//             callback(null, htmlPluginData);
//         });
//     });
// };
//
// module.exports = MyPlugin;

module.exports = {
    entry: {
        index: path.resolve(__dirname, 'src/index.js'),
        // fontLoader: path.resolve(__dirname, 'src/font-loader.js'),
    },
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    watchOptions: {
        aggregateTimeout: 1000
    },
    resolve: {
        modules: [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, 'bower_components')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: ['babel-loader', 'wc-loader', 'postcss-polymer-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: false,
        host: "0.0.0.0",
        port: 9000,
        public:'webpack.docker.localhost',
        clientLogLevel: "info",
        disableHostCheck: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.ejs'),
            inject: false,
        }),
        // new MyPlugin({options: ''}),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, 'bower_components/webcomponentsjs/*.js'),
            to: 'bower_components/webcomponentsjs/[name].[ext]'
        }]),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        })
    ]
};