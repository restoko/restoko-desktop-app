import axios from 'axios';
import { API_URL } from '../api/apiconfig';

export const GET_TABLES = 'GET_TABLES';
export const RECV_TABLES_DATA = 'RECV_TABLES_DATA';
export const RECV_TABLES_ERROR = 'RECV_TABLES_ERROR';
export const CREATE_TABLE = 'CREATE_TABLE';

export function getTables() {
    return {
        type: GET_TABLES
    };
}

function createTable() {
    return {
        type: CREATE_TABLE
    };
}

function receiveData(json) {
    return{
        type: RECV_TABLES_DATA,
        data: json
    }
}

function receiveError(json) {
    return {
        type: RECV_TABLES_ERROR,
        data: json
    }
}

export function fetchTables() {
    return function(dispatch) {
        dispatch(getTables());

        return axios({
            url: API_URL + 'tables',
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            dispatch(receiveData(response.data.data));
        })
        .catch(function(response){
            console.log(response);
            dispatch(receiveError(response.data.data));
            dispatch(pushState(null,'/error'));
        });
    }
}

export function createTableRequest(data) {
    return function(dispatch) {
        dispatch(createTable());

        return axios({
            url: API_URL + 'tables',
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: data
        })
            .then(function(response) {
                dispatch(fetchTables());
            })
            .catch(function(response){
                dispatch(receiveError(response.data.data));
                dispatch(pushState(null,'/error'));
            });
    }
}