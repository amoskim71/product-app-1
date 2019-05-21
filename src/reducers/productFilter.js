import { PRODUCT_FILTER } from '../actions/actionTypes';

const intialState = {
    query: ''
}

export default (state = intialState, action) => {
    switch (action.type) {
        case PRODUCT_FILTER:
            return Object.assign({}, state.filter, {
                query: action.payload
            });

        default:
            return state;
    }
}