import React, { Component } from 'react';
import ProductCollection from './ProductCollection';
import PageListHeader from '../commons/PageListHeader';
import PageFormHeader from '../commons/PageFormHeader';
import FormContainer from '../commons/FormContainer';
import ProductCreateForm from './Form';

export default class Product extends Component {
    state = {
        showCreateForm: false
    };

    componentDidMount() {
        this.props.fetchProducts();
        this.props.fetchCategoriesForSelect();
    };

    createProduct = (data) => {
        this.setState({ showCreateForm: false });
        this.props.createProductRequest(data);
    };

    onCreateClick = () => {
        this.setState({ showCreateForm: true });
    };

    onBackClick = () => {
        this.setState({ showCreateForm: false });
    };

    render() {
        const { products, categories } = this.props;

        if (! this.state.showCreateForm) {
            return (
                <div>
                    <PageListHeader title="Products" createButtonTitle="Create New Product" onCreateClick={this.onCreateClick}/>
                    <ProductCollection products={products.data} />
                </div>
            )
        }

        return (
            <div>
                <PageFormHeader title="Create a product" backButtonTitle="Back to Products" onBackClick={this.onBackClick}/>
                <FormContainer>
                    <ProductCreateForm categories={categories.data} createProduct={this.createProduct} />
                </FormContainer>

            </div>
        );
    }
}