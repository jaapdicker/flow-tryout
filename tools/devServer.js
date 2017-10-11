const path = require('path');

const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');

const fs = require('fs');

const webpackConfig = require('../webpack/webpack.dev.config');

const app = express();
const compiler = webpack(webpackConfig);

const setupServer = () => {
    console.log('🖥  Creating The Matrix');
    app.use(devMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        historyApiFallback: true,
        stats: {
            colors: true,
        },
    }));

    app.use(hotMiddleware(compiler));

    app.get('*', (req, res) => {
        console.log(path.join(__dirname, '/../index.html'));
        return res.sendFile(path.join(__dirname, '/../index.html'));
    });

    app.listen('8080', (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('🗝  You have to let it all go, Neo. Fear, doubt, and disbelief. Free your mind. 💡');
        return console.log('👁  Your mind makes it real. http://localhost:8080/');
    });
};

const setCSS = (client) => {
    const srcPath = `./src/themes/${client}.css`;
    const savPath = './src/themes/default.css';
    fs.readFile(srcPath, 'utf8', (err, data) => {
        if (err) throw err;
        fs.writeFile(savPath, data, (error) => {
            if (error) throw error;
            console.log(`💅  ${client}.css`);
            setupServer();
        });
    });
};

setupServer();
