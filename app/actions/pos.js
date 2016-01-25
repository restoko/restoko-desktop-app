import axios from 'axios';
import { API_URL } from '../api/apiconfig';

import { fetchTables } from './table';

export function fetchTablesDispatch() {
    return function(dispatch) {
        dispatch(fetchTables());
    }
}