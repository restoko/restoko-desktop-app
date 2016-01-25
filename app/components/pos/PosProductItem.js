import React, { Component } from 'react';
import style from './Pos.module.css';

export default class PosTableItem extends Component {
    render() {
        return (
            <tr>
                <td className="mdl-data-table__cell--non-numeric">{this.props.item.quantity}</td>
                <td className="mdl-data-table__cell--non-numeric">
                    {this.props.item.product.name}
                </td>
                <td className="mdl-data-table__cell--non-numeric">
                    {this.props.item.product.price} PHP
                </td>
            </tr>
        )
    }
}