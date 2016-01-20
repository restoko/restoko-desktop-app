import { GET_PRODUCTS, RECV_PRODUCTS_DATA, RECV_PRODUCTS_ERROR, CREATE_CATEGORY } from '../actions/product';

export default function products(state = {isLoading: false, data: [], error: false}, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return Object.assign({}, state, {isLoading: true, error: false });
        case RECV_PRODUCTS_DATA:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
        case RECV_PRODUCTS_ERROR:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
        case CREATE_CATEGORY:
            return Object.assign({}, state, {isLoading: true, error: false });
        default:
            return state;
    }
}
