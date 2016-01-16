import React, { Component } from 'react';

export default class CategoryItem extends Component {
    render() {
        const { category } = this.props;
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{category.material}</td>
                <td>{category.quantity}</td>
                <td>{category.unitPrice}</td>
            </tr>
        );
    };
}