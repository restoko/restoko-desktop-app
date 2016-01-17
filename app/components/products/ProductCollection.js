import React, { Component } from 'react';
import ProductItem from './ProductItem';

export default class ProductCollection extends Component {
    render() {
        const { products } = this.props;

        return (
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Picture</th>
                    <th className="mdl-data-table__cell--non-numeric">Category</th>
                    <th className="mdl-data-table__cell--non-numeric">Name</th>
                    <th>Unit price</th>
                </tr>
                </thead>
                <tbody>
                {products.map(function(product, i) {
                    return <ProductItem product={product} key={i} />
                })}
                </tbody>
            </table>
        )
    }
}