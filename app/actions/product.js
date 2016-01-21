import axios from 'axios';
import { API_URL } from '../api/apiconfig';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const RECV_PRODUCTS_DATA = 'RECV_PRODUCTS_DATA';
export const RECV_PRODUCTS_ERROR = 'RECV_PRODUCTS_ERROR';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';

import { fetchCategories } from './category';

export function getProducts() {
    return {
        type: GET_PRODUCTS
    };
}

export function fetchCategoriesForSelect() {
    return function(dispatch) {
        dispatch(fetchCategories());
    }
}

function createProduct() {
    return {
        type: CREATE_PRODUCT
    };
}

function receiveData(json) {
    return{
        type: RECV_PRODUCTS_DATA,
        data: json
    }
}

function receiveError(json) {
    return {
        type: RECV_PRODUCTS_ERROR,
        data: json
    }
}

export function fetchProducts() {
    return function(dispatch) {
        dispatch(getProducts());

        return axios({
            url: API_URL + 'products',
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

export function createProductRequest(data) {
    return function(dispatch) {
        dispatch(createProduct());

        return axios({
            url: API_URL + 'products',
            timeout: 20000,
            method: 'post',
            responseType: 'json',
            data: data
        })
        .then(function(response) {
            dispatch(fetchProducts());
        })
        .catch(function(response){
            dispatch(receiveError(response.data.data));
            dispatch(pushState(null,'/error'));
        });
    }
}