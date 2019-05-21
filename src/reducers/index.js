import { combineReducers } from 'redux';
import products from './products';
import filter from './productFilter'

export default combineReducers({
    products,
    filter,
});
