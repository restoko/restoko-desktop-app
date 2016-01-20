import { GET_TABLES, RECV_TABLES_DATA, RECV_TABLES_ERROR, CREATE_TABLE } from '../actions/table';

export default function tables(state = {isLoading: false, data: [], error: false}, action) {
    switch (action.type) {
        case GET_TABLES:
            return Object.assign({}, state, {isLoading: true, error: false });
        case RECV_TABLES_DATA:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: false });
        case RECV_TABLES_ERROR:
            return Object.assign({}, state, {isLoading: false, data: action.data, error: true});
        case CREATE_TABLE:
            return Object.assign({}, state, {isLoading: true, error: false });
        default:
            return state;
    }
}
