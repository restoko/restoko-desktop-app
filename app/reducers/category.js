import axios from 'axios';

import { GET_CATEGORIES, RECV_CATEGORIES_DATA, RECV_CATEGORIES_ERROR, CREATE_CATEGORY } from '../actions/category';

export default function categories(state = {isLoading: false, data: [], error: false}, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return Object.assign({}, state, {isLoading: true, error: false });
        case RECV_CATEGORIES_DATA:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
        case RECV_CATEGORIES_ERROR:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
        case CREATE_CATEGORY:
            return Object.assign({}, state, {isLoading: true, error: false });
        default:
            return state;
    }
}
