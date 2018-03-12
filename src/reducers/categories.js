/* @flow */
import type { Category } from 'types';

import {
    REQUEST_CATEGORIES,
    SUCCESS_CATEGORIES,
    FAILURE_CATEGORIES,
} from 'actions/categories';

import type { Action } from 'actions/categories';

import type { Exact } from 'helpers/flow';

export type State = Exact<{
    categories: [Category] | [],
    isFetching: boolean,
    error?: string,
}>;

const beginState: State = {
    categories: [],
    isFetching: false,
    error: '',
};

const categories = (state: State = beginState, action: Action): State => {
    switch (action.type) {
        case REQUEST_CATEGORIES:
            return {
                ...state,
                isFetching: true,
            };
        case SUCCESS_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
                isFetching: false,
                error: '',
            };
        case FAILURE_CATEGORIES:
            return {
                ...state,
                categories: [],
                isFetching: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default categories;
