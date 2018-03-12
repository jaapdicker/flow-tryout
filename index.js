import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader'; // eslint-disable-line

import { Provider } from 'react-redux';

import App from 'containers/index';

import Store from 'helpers/store';

const render = (Component) => {
    ReactDOM.render(
        <Provider store={Store}>
            <AppContainer>
                <Component />
            </AppContainer>
        </Provider>,
        document.getElementById('app'),
    );
};

render(App);
