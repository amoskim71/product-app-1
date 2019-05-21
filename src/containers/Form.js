import { connect } from 'react-redux';
import ProductFrom from '../components/ProductForm';
import { productSchema } from '../utils/dataProvider';
import { productCreate, productUpdate } from '../actions/index';

const mapStateToProps = (state, ownProps) => {
    const { params } = ownProps.match;
    let product = productSchema;

    if (params.hasOwnProperty('productId')) {
        product = state.products.find(product => product.id == params.productId)
    }
    return {
        product
    }
};

const mapDispatchToProps = (dispatch) => ({
    onProductSave: product => {
        if (product.id !== null) {
            dispatch(productUpdate(product));
        } else {
            dispatch(productCreate(product));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductFrom);