import React, { Component } from 'react';
import Griddle from 'griddle-react';

export default class TableCollection extends Component {
    render() {
        const { tables } = this.props;

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
                columnName: 'created_at',
                displayName: 'Created',
                cssClassName: 'mdl-data-table__cell--non-numeric'
            }
        ];

        return (
            <Griddle results={tables}
                     tableClassName="mdl-data-table"
                     showFilter={true}
                     enableInfiniteScroll={true}
                     useFixedHeader={true}
                     bodyHeight={400}
                     showSettings={true}
                     columnMetadata={columnMeta}
                     columns={["name", "slug", "created_at"]} />
        )
    }
}