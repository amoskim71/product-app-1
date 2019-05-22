import { connect } from 'react-redux';
import ProductList from '../components/ProductList';
import { productDelete, productFilter } from '../actions';

const applyFilters = (products, filter) => {
    if (!filter.query) {
        return products;
    }

    return products.filter(product => {
        let reg = RegExp('.*' + filter.query + '.*', 'ig');
        return reg.test(product.title);
    })
};

const mapStateToProps = (state) => ({
    products: applyFilters(state.products, state.filter),
    filter: state.filter
});

const mapDispatchToProps = (dispatch) => ({
    onProductDelete: product => dispatch(productDelete(product)),
    onProductSearchFilter: query => dispatch(productFilter(query))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);