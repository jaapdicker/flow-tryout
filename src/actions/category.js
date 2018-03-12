/* @flow */
import axios from 'axios';

import type Category from 'types';

import type { Exact } from 'helpers/flow';

export type Action = Exact<{
    type: string,
    name?: string,
    category?: [Category],
    error?: string,
}>;

export const REQUEST_CATEGORY = 'REQUEST_CATEGORY';
export const SUCCESS_CATEGORY = 'SUCCESS_CATEGORY';
export const FAILURE_CATEGORY = 'FAILURE_CATEGORY';

const requestCategory = (): Action => ({
    type: REQUEST_CATEGORY,
});

const successCategory = (name: string, category: Object): Action => ({
    type: SUCCESS_CATEGORY,
    name,
    category,
});

const failureCategory = (error: string): Action => ({
    type: FAILURE_CATEGORY,
    error,
});

export const fetchCategory = (name: string, dispatch: Function) => {
    dispatch(requestCategory());
    return axios.get(`https://swapi.co/api/${name}?format=json`)
        .then((response) => {
            const res = response.data.results;
            const data = name === 'films' ? res.map(r => ({ name: r.title })) : res.map(r => ({ name: r.name }));
            dispatch(successCategory(name, data));
        })
        .catch(error => dispatch(failureCategory(error)));
};
