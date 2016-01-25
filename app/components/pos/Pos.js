import React, { Component } from 'react';
import style from './Pos.module.css';
import PosTableItem from './PosTableItem'

export default class Pos extends Component {

    componentDidMount() {
        this.props.fetchTablesDispatch();
    };

    render() {
        const { tables } = this.props;

        return (
            <div className="mdl-grid">
                <div className="mdl-cell mdl-cell--7-col mdl-cell--5-col-tablet mdl-cell--3-col-phone">
                    <div className={style.tableList}>
                        <h1>Tables</h1>
                    </div>

                    <div>
                        <table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
                            <thead>
                                <tr>
                                    <th className="mdl-data-table__cell--non-numeric">Table</th>
                                    <th className="mdl-data-table__cell--non-numeric">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tables.data.map(function(table, i) {
                                    return <PosTableItem status={table.status} name={table.name} tableId={table.id} />
                                })}

                            </tbody>
                        </table>
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