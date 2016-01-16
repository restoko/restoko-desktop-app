import { combineReducers } from 'redux';
import counter from './counter';
import category from './category';

const rootReducer = combineReducers({
    counter,
    category
});

export default rootReducer;
