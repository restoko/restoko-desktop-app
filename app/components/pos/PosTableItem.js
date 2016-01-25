import React, { Component } from 'react';
import style from './Pos.module.css';

export default class PosTableItem extends Component {
    clickHandler = (e) => {
        this.props.getProduct(this.props.tableId);
    };

    render() {
        if (this.props.status == 'available') {
            return (
                <tr onClick={this.clickHandler}>
                    <td className="mdl-data-table__cell--non-numeric">{this.props.name}</td>
                    <td className="mdl-data-table__cell--non-numeric">
                        <span className={style.available}>available</span>
                    </td>
                </tr>
            )
        }

        if (this.props.status == 'occupied') {
            return (
                <tr onClick={this.clickHandler}>
                    <td className="mdl-data-table__cell--non-numeric">{this.props.name}</td>
                    <td className="mdl-data-table__cell--non-numeric">
                        <span className={style.occupied}>occupied</span>
                    </td>
                </tr>
            )
        }

        if (this.props.status == 'cleaning') {
            return (
                <tr onClick={this.clickHandler}>
                    <td className="mdl-data-table__cell--non-numeric">{this.props.name}</td>
                    <td className="mdl-data-table__cell--non-numeric">
                        <span className={style.cleaning}>cleaning</span>
                    </td>
                </tr>
            )
        }

        if (this.props.status == 'requesting_for_billout') {
            return (
                <tr onClick={this.clickHandler}>
                    <td className="mdl-data-table__cell--non-numeric">{this.props.name}</td>
                    <td className="mdl-data-table__cell--non-numeric">
                        <span className={style.requestBillout}>requesting For Billout</span>
                    </td>
                </tr>
            )
        }

    }
}