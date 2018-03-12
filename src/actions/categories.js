/* @flow */
import axios from 'axios';

import type Category from 'types';

import type { Exact } from 'helpers/flow';

export type Action = Exact<{
    type: string,
    categories?: [Category],
    error?: string,
}>;

export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const SUCCESS_CATEGORIES = 'SUCCESS_CATEGORIES';
export const FAILURE_CATEGORIES = 'FAILURE_CATEGORIES';

const requestCategories = (): Action => ({
    type: REQUEST_CATEGORIES,
});

const successCategories = (categories: [Category] | []): Action => ({
    type: SUCCESS_CATEGORIES,
    categories,
});

const failureCategories = (error: string): Action => ({
    type: FAILURE_CATEGORIES,
    error,
});

export const fetchCategories = (dispatch: Function) => {
    dispatch(requestCategories());
    return axios.get('https://swapi.co/api/?format=json')
        .then((response) => {
            const catKeys = Object.keys(response.data);
            const categories = [];
            catKeys.forEach((k) => {
                categories.push({
                    name: k,
                    link: response.data[k],
                });
            });

            dispatch(successCategories(categories));
        })
        .catch(error => dispatch(failureCategories(error)));
};
