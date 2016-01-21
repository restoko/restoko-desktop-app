import axios from 'axios';
import { API_URL } from '../api/apiconfig';

export const GET_CATEGORIES = 'GET_CATEGORIES';
export const RECV_CATEGORIES_DATA = 'RECV_CATEGORIES_DATA';
export const RECV_CATEGORIES_ERROR = 'RECV_CATEGORIES_ERROR';
export const CREATE_CATEGORY = 'CREATE_CATEGORY';

export function getCategories() {
    return {
        type: GET_CATEGORIES
    };
}

function createCategory() {
    return {
        type: CREATE_CATEGORY
    };
}

function receiveData(json) {
    return{
        type: RECV_CATEGORIES_DATA,
        data: json
    }
}

function receiveError(json) {
    return {
        type: RECV_CATEGORIES_ERROR,
        data: json
    }
}

export function fetchCategories() {
    return function(dispatch) {
        dispatch(getCategories());

        return axios({
            url: API_URL + 'categories',
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then(function(response) {
            dispatch(receiveData(response.data.data));
        })
        .catch(function(response){
            dispatch(receiveError(response.data.data));
            dispatch(pushState(null,'/error'));
        });
    }
}

export function createCategoryRequest(data) {
    return function(dispatch) {
        dispatch(createCategory());

        return axios({
            url: API_URL + 'categories',
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: data
        })
        .then(function(response) {
            dispatch(fetchCategories());
        })
        .catch(function(response){
            dispatch(receiveError(response.data.data));
            dispatch(pushState(null,'/error'));
        });
    }
}