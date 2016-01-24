import React, { Component } from 'react';
import style from './Pos.module.css';

export default class Pos extends Component {

    componentDidMount() {

    };

    render() {
        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                    <div className={style.tableList}>
                        <h1>Tables</h1>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--5-col mdl-cell--3-col-tablet mdl-cell--1-col-phone">
                    <div className={style.productList}>
                        <h1>Products</h1>
                    </div>
                </div>
            </div>
        )
    }
}