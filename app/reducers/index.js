import { combineReducers } from 'redux';
import counter from './counter';
import category from './category';
import product from './product';
import table from './table';

const rootReducer = combineReducers({
    counter,
    category,
    product,
    table
});

export default rootReducer;
