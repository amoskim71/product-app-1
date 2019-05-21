import { PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_DELETE } from '../actions/actionTypes';
import { products } from '../utils/dataProvider';


export default (state = { products }, action) => {
    switch (action.type) {
        case PRODUCT_CREATE:
            return {
                ...state,
                product: Object.assign({}, action.payload)
            }
        case PRODUCT_UPDATE:
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                        ? action.payload
                        : product
                )
            }
        case PRODUCT_DELETE:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload.id)
            }
        default:
            return state;
    }
}