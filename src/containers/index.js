/* @flow */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Overview from './Overview';
import Category from './Category';

const App = () => (
    <Router>
        <div>
            <Route exact path="/" component={Overview} />
            <Route path="/category/:name" component={Category} />
        </div>
    </Router>
);

export default hot(module)(App);
