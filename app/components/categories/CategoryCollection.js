import React, { Component } from 'react';
import Griddle from 'griddle-react';

export default class CategoryCollection extends Component {


    render() {
        const { categories } = this.props;

        var columnMeta = [
            {
                columnName: 'material',
                displayName: 'Material',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'quantity',
                displayName: 'Quantity'
            },
            {
                columnName: 'unitPrice',
                displayName: 'Unit Price'
            }
        ];

        return (
            <Griddle results={categories}
                 tableClassName="mdl-data-table"
                 showFilter={true}
                 enableInfiniteScroll={true}
                 useFixedHeader={true}
                 bodyHeight={400}
                 showSettings={true}
                 columnMetadata={columnMeta} />
        );
    };
}