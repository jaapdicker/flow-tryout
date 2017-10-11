var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client',
        path.join(__dirname, '../index.js'),
    ],
    output: {
        path: __dirname + '/dist/dev',
        filename: 'bundle.js',
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
            loaders: [
                "style-loader",
                'css-loader?importLoader=1&modules&localIdentName=[path]__[name]__[local]',
                "postcss-loader",
            ],
        }],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            IS_PRODUCTION: JSON.stringify(false),
            process_env: {
                NODE_ENV: JSON.stringify('development'),
            },
        }),
    ],
}
