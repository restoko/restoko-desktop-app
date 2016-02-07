import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { API_URL } from '../../api/apiconfig';
import axios from 'axios';

export default class Kitchen extends Component {
    state = {
        pendingOrders: []
    };

    getPendingOrders = () => {
        axios({
            url: API_URL + 'kitchen/',
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then((response) => {
            this.setState({ pendingOrders: response.data.data});
            console.log(response.data.data);
        })
        .catch(function(response){
            console.log(response);
            console.log('ERROR ON GETTING CART');
        });
    };

    componentDidMount() {
        this.getPendingOrders();
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

