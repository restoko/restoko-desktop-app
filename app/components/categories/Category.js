import React, { Component } from 'react';
import CategoryCollection from './CategoryCollection';
import PageListHeader from '../commons/PageListHeader';
import PageFormHeader from '../commons/PageFormHeader';
import FormContainer from '../commons/FormContainer';
import CategoryCreateForm from './Form';

export default class Category extends Component {
    state = {
        showCreateForm: false
    };

    componentDidMount() {
        this.props.getCategories();
    };

    onCreateClick = () => {
        this.setState({ showCreateForm: true });
    };

    onBackClick = () => {
        this.setState({ showCreateForm: false });
    };

    render() {
        const { categories } = this.props;

        if (! this.state.showCreateForm) {
            return (
                <div>
                    <PageListHeader title="Categories" createButtonTitle="Create New Category" onCreateClick={this.onCreateClick}/>
                    <CategoryCollection categories={categories} />
                </div>
            );
        }

        return (
            <div>
                <PageFormHeader title="Create a category" backButtonTitle="Back to Categories" onBackClick={this.onBackClick}/>
                <FormContainer>
                    <CategoryCreateForm onBackClick={this.onBackClick} />
                </FormContainer>

            </div>
        );
    };
}