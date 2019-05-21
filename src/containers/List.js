import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { productDelete } from '../actions';

const mapStateToProps = (state) => ({
    products: state.products
});

const mapDispatchToProps = (dispatch) => ({
    onProductDelete: product => dispatch(productDelete(product))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);