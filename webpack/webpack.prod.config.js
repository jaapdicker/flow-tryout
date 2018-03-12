var webpack = require('webpack');
var path = require('path');

var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var HtmlWebpack = require('html-webpack-plugin');
var Compression = require('compression-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: {
        app: [
            path.join(__dirname, '../index.js'),
        ],
        vendor: [
            'react',
            'react-dom',
            'redux',
            'react-redux',
        ],
    },
    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        filename: 'public/[name].[chunkhash].js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            include: path.join(__dirname, '../'),
            loaders: ['react-hot-loader/webpack', 'babel-loader'],
        },
        {
            test: /\.css$/,
            loaders: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader?importLoader=1&modules&localIdentName=[name]__[hash:base64:6]!postcss-loader',
            }),
        }],
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../reports/webpack-bundle-prod.html',
            openAnalyzer: false,
        }),
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new ExtractTextPlugin({
            filename: 'public/app.css',
            allChunks: true,
        }),
        new HtmlWebpack({
            title: 'Label A test case',
            filename: 'index.html',
            template: 'tools/index.jst',
        }),
        new Compression({
            asset: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$/,
            threshold: 10240,
            minRatio: 0.8,
        }),
        new LodashModuleReplacementPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false,
            },
            minimize: true,
            compress: {
                screw_ie8: true,
                warnings: false,
                conditionals: true,
                unused: true,
                comparisons: true,
                sequences: true,
                dead_code: true,
                evaluate: true,
                if_return: true,
                join_vars: true,
            },
        }),
        new webpack.DefinePlugin({
            IS_PRODUCTION: JSON.stringify(true),
            IS_SERVER: JSON.stringify(false),
            process_env: {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
}
