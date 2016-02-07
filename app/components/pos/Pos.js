import React, { Component } from 'react';
import style from './Pos.module.css';
import PosTableItem from './PosTableItem'
import PosProductItem from './PosProductItem';
import axios from 'axios';
import { API_URL } from '../../api/apiconfig';
import PaymentDialog from './Payment';

export default class Pos extends Component {
    state = {
        products: [],
        total: 0,
        isPaymentModalOpen: false
    };

    componentDidMount() {
        this.props.fetchTablesDispatch();
    }

    calculateTotal = (items) => {
        var total = 0;
        for (var i = 0; i < items.length; i++) {
            total += items[i].quantity * items[i].product.price
        }

        this.setState({ total: total});
    };

    getProduct = (tableId) => {
        axios({
            url: API_URL + 'carts/' + tableId,
            timeout: 20000,
            method: 'get',
            responseType: 'json'
        })
        .then((response) => {
            this.setState({ products: response.data.data.items});
            this.calculateTotal(response.data.data.items);
        })
        .catch(function(response){
            console.log(response);
            console.log('ERROR ON GETTING CART');
        });
    };

    render() {
        const { tables } = this.props;

        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--3-col-phone">
                    <div className={style.tableList}>
                        <h1>Tables</h1>
                    </div>

                    <div>
                        <table className="mdl-data-table">
                            <thead>
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Table</th>
                                <th className="mdl-data-table__cell--non-numeric">Status</th>
                            </tr>
                            </thead>
                        </table>

                        <div style={{ maxHeight: '400px', overflowY: 'scroll'}}>
                            <table className="mdl-data-table">
                                <tbody>
                                {tables.data.map((table, i) => {
                                    return <PosTableItem key={i} status={table.status} name={table.name} tableId={table.id} getProduct={this.getProduct} />
                                })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="mdl-cell mdl-cell--8-col mdl-cell--5-col-tablet mdl-cell--1-col-phone">
                    <div className={style.productList}>
                        <h1>Products</h1>
                    </div>

                    <div>
                        <table className="mdl-data-table">
                            <thead>
                            <tr>
                                <th className="mdl-data-table__cell--non-numeric">Quantity</th>
                                <th className="mdl-data-table__cell--non-numeric">Product</th>
                                <th>Unit Price</th>
                            </tr>
                            </thead>
                        </table>

                        <div style={{ minHeight: '255px', maxHeight: '255px', overflowY: 'scroll'}}>
                            <table className="mdl-data-table">
                                <tbody>
                                {this.state.products.map(function(product, i) {
                                    return <PosProductItem key={i} item={product} />
                                })}

                                </tbody>
                            </table>
                        </div>

                        <table className="mdl-data-table">
                            <tfoot>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"><strong> Net Total</strong></td>
                                    <td></td>
                                    <td>{this.state.total} PHP</td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"><strong> Tax</strong></td>
                                    <td></td>
                                    <td>{this.state.total} PHP</td>
                                </tr>
                                <tr>
                                    <td className="mdl-data-table__cell--non-numeric"><strong> Total</strong></td>
                                    <td></td>
                                    <td>{this.state.total} PHP</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>

                <hr/>
                <div style={{clear: 'both'}}></div>
                <div style={{marginTop: '20px', float: 'right'}}>
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect">Make Selected Table Available</button> &nbsp;
                    <button className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">Send Invoice</button> &nbsp;
                    <button onClick={() => {this.setState({isPaymentModalOpen: true})}} className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">Proceed to Payment</button> &nbsp;

                    <PaymentDialog open={this.state.isPaymentModalOpen} />
                </div>
            </div>
        )
    }
}