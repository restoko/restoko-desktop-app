import React, { Component } from 'react';
import CategoryCollection from './CategoryCollection';

export default class Category extends Component {

    componentDidMount() {
        this.props.getCategories();
    };

    render() {
        const { categories } = this.props;

        return (
            <div>
                <CategoryCollection categories={categories} />

                <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" style={{ position: 'fixed', bottom: '20px', right: '20px'}}>
                    <i className="material-icons">add</i>
                </button>
            </div>
        );
    };
}