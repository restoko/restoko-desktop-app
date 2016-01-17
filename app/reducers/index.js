import { combineReducers } from 'redux';
import counter from './counter';
import category from './category';
import product from './product';

const rootReducer = combineReducers({
    counter,
    category,
    product
});

export default rootReducer;
