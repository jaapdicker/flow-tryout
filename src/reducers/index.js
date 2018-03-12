/* @flow */
import { combineReducers } from 'redux';

import categories from 'reducers/categories';
import category from 'reducers/category';

export default combineReducers({
    overview: categories,
    category,
});
