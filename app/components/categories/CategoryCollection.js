import React, { Component } from 'react';
import Griddle from 'griddle-react';

export default class CategoryCollection extends Component {


    render() {
        const { categories } = this.props;

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
                columnName: 'slug',
                displayName: 'Slug',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            },
            {
                columnName: 'name',
                displayName: 'Name',
                cssClassName: 'mdl-data-table__cell--non-numeric'
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
            <Griddle results={categories}
                 tableClassName="mdl-data-table"
                 showFilter={true}
                 enableInfiniteScroll={true}
                 useFixedHeader={true}
                 bodyHeight={400}
                 showSettings={true}
                 columnMetadata={columnMeta}
                 columns={["name", "slug", "description", "created_at"]} />
        );
    };
}