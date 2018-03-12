/* @flow */
import type { GenericCategory } from 'types';

import {
    REQUEST_CATEGORY,
    SUCCESS_CATEGORY,
    FAILURE_CATEGORY,
} from 'actions/category';

import type { Exact } from 'helpers/flow';

export type State = Exact<{
    categories: {[key: string]: [GenericCategory]},
    isFetching: boolean,
    error?: string,
}>;

const beginState: State = {
    categories: {
        people: [],
        planets: [],
        films: [],
        species: [],
        vehicles: [],
        starships: [],
    },
    isFetching: false,
    error: '',
};

const categories = (state: State = beginState, action: Object): State => {
    switch (action.type) {
        case REQUEST_CATEGORY:
            return {
                ...state,
                isFetching: true,
            };
        case SUCCESS_CATEGORY: {
            const update = {};
            update[action.name] = action.category;
            const updatedCats = Object.assign({}, state.categories, {
                [action.name]: action.category,
            });

            return {
                ...state,
                categories: updatedCats,
                isFetching: false,
            };
        }
        case FAILURE_CATEGORY:
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
