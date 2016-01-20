import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Table from '../components/tables/Table';
import * as TableActions from '../actions/table';

function mapStateToProps(state) {
    return {
        tables: state.table
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(TableActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);
