import { connect } from 'react-redux';
import ProductFrom from '../components/ProductForm';
import { productSchema } from '../utils/dataProvider';

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

export default connect(mapStateToProps)(ProductFrom);