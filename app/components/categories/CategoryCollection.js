import React, { Component } from 'react';
import CategoryItem from './CategoryItem';

export default class CategoryCollection extends Component {


    render() {
        const { categories } = this.props;

        return (
            <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Material</th>
                    <th>Quantity</th>
                    <th>Unit price</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(function(category, i) {
                    return <CategoryItem category={category} key={i} />
                })}
                </tbody>
            </table>
        );
    };
}