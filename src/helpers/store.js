import { createStore, applyMiddleware, compose } from 'redux';
import type { Store } from 'redux';
import rootReducer from 'reducers/index';

const middlewares = [];

if (!IS_PRODUCTION) {
    const reduxLogger = require('redux-logger'); // eslint-disable-line
    const logger = reduxLogger.createLogger({});
    middlewares.push(logger);
}

const configureStore = (initialState: Object) => {
    const enhancers = [
        applyMiddleware(...middlewares),
    ];

    if (!IS_PRODUCTION) {
        if (typeof window === 'object' && window.devToolsExtension) {
            const devTools = window.devToolsExtension;
            enhancers.push(devTools());
        }
    }

    const store: Store = createStore(
        rootReducer,
        initialState,
        compose(...enhancers),
    );

    if (typeof window === 'function') {
        const { module } = window;
        if (!IS_PRODUCTION && (module).hot) {
            (module).hot.accept('../reducers', () => {
                const nextRootReducer = require('../reducers').default; // eslint-disable-line
                store.replaceReducer(nextRootReducer);
            });
        }
    }

    return store;
};

const newStore = configureStore();
export default newStore;
