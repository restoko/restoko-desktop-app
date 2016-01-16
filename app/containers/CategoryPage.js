import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Category from '../components/categories/Category';
import * as CategoryActions from '../actions/category';

function mapStateToProps(state) {
    return {
        categories: state.category
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CategoryActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
