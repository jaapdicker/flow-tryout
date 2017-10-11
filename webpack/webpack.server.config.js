const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    devtool: 'cheap-module-source-map',
    target: 'node',
    node: {
        __dirname: false,
        __filename: false,
    },
    externals: [nodeExternals()],
    entry: [
        path.resolve(__dirname, '../tools/prodServer.js'),
    ],
    output: {
        path: path.resolve(__dirname, '../dist/prod'),
        library: '[name]',
        libraryTarget: 'commonjs2',
        filename: 'prodServer.js',
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '../src'),
        ],
        extensions: [
            '*',
            '.js',
            '.json',
            '.jsx',
        ],
    },
    module: {
        loaders: [
            {
                test: /\.js(x?)$/,
                loader: 'babel-loader',
                include: /(src|server)/,
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'IS_PRODUCTION': JSON.stringify(true),
            'IS_SERVER': JSON.stringify(true),
            '__env': JSON.stringify(),
            'process.env.NODE_ENV': JSON.stringify('production'),
        }),
        new webpack.ProvidePlugin({
            React: 'react',
            ReactDOM: 'react-dom',
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: '../reports/webpack-bundle-server.html',
            openAnalyzer: false,
        }),
    ],
};
