import React, { Component } from 'react';

export default class ProductItem extends Component {
    render() {
        const { product } = this.props;
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{product.picture}</td>
                <td className="mdl-data-table__cell--non-numeric">{product.category}</td>
                <td className="mdl-data-table__cell--non-numeric">{product.name}</td>
                <td>{product.price}</td>
            </tr>
        );
    };
}