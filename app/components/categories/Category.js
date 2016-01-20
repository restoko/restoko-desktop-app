import React, { Component } from 'react';
import CategoryCollection from './CategoryCollection';
import PageListHeader from '../commons/PageListHeader';

export default class Category extends Component {

    componentDidMount() {
        this.props.getCategories();
    };

    render() {
        const { categories } = this.props;

        return (
            <div>
                <PageListHeader title="Categories" createButtonTitle="Create New Category"/>
                <CategoryCollection categories={categories} />
            </div>
        );
    };
}