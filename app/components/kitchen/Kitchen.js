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
        })
        .catch(function(response){
            console.log(response);
            console.log('ERROR ON GETTING CART');
        });
    };


    cancelOrder = (orderId) => {
        let id = orderId;
        let data = this.state.pendingOrders;

        for(var i = 0; i < data.length; i++) {
            if(data[i].cart_item_id == id) {
                data.splice(i, 1);
                break;
            }
        }

        this.setState({ pendingOrders: data });
    };

    readyOrder = (orderId) => {
        let id = orderId;
        let data = this.state.pendingOrders;

        for(var i = 0; i < data.length; i++) {
            if(data[i].cart_item_id == id) {
                data.splice(i, 1);
                break;
            }
        }

        this.setState({ pendingOrders: data });
    };

    componentDidMount() {
        this.getPendingOrders();
    }

    render() {
        return (
            <div>
                {this.state.pendingOrders.map(function(order, i) {
                    return <ProductCard
                        status={order.status}
                        id={order.cart_item_id}
                        productName={order.product_name}
                        tableName={order.table}
                        quantity={order.quantity}
                        key={i}
                        readyOrder={this.readyOrder}
                        cancelOrder={this.cancelOrder} />
                }.bind(this))}
            </div>
        )
    }
}

