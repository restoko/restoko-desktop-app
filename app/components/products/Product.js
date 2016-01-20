import React, { Component } from 'react';
import ProductCollection from './ProductCollection';

export default class Product extends Component {

    componentDidMount() {
        this.props.fetchProducts();
    };

    render() {
        const { products } = this.props;

        return (
            <div>
                <ProductCollection products={products.data} />

                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style={{ position: 'fixed', bottom: '20px', right: '20px'}}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        )
    }
}