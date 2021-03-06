import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Pos from '../components/pos/Pos';
import * as PosActions from '../actions/pos';

function mapStateToProps(state) {
    return {
        tables: state.table
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PosActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pos);
