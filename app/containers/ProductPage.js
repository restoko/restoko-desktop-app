import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Product from '../components/products/Product';
import * as ProductActions from '../actions/product';

function mapStateToProps(state) {
    return {
        products: state.product,
        categories: state.category
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(ProductActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
