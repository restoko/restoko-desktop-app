import React, { Component } from 'react';
import Griddle from 'griddle-react';
import ProductItem from './ProductItem';

export default class ProductCollection extends Component {
    render() {
        const { products } = this.props;

        var columnMeta = [
            {
                columnName: 'id',
                visible: false
            },
            {
                columnName: 'updated_at',
                visible: false
            },
            {
                columnName: 'picture',
                displayName: 'Picture',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'category',
                displayName: 'Category',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'name',
                displayName: 'Name',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'slug',
                displayName: 'Slug',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'price',
                displayName: 'Unit Price'
            },
            {
                columnName: 'description',
                displayName: 'Description',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'created_at',
                displayName: 'Created',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            }
        ];

        return (
            <Griddle results={products}
                 tableClassName="mdl-data-table"
                 showFilter={true}
                 enableInfiniteScroll={true}
                 useFixedHeader={true}
                 bodyHeight={400}
                 showSettings={true}
                 columnMetadata={columnMeta}
                 columns={["picture", "category", "name", "price", "description", "created_at"]} />
        )
    }
}