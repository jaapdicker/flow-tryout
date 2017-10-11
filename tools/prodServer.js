/* @flow */
import 'babel-polyfill';
import path from 'path';

import express from 'express';
// import type { Request, Response } from 'express';

const app = express();

app.use('/public', express.static(path.join(__dirname, '/public')));

app.use('/health', (req, res) => {
    res.status(200).json({ status: 'success' });
});

app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

console.log('🌎 FLEX Web / Webserver listening on port 5656');
app.listen(5656);
