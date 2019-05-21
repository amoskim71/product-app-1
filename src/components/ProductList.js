import React, { Component } from 'react';
import Product from './Product';
import ProductEmpty from './ProductEmpty';
import Navigator from './Navigator';
import PropTypes from 'prop-types';
import Search from './Search';

class ProductList extends Component {

    onProductDelete = (product) => {
        this.props.onProductDelete(product);
    }

    onProductSearch = (query) => {
        this.props.onProductSearchFilter(query);
    }

    render() {
        const { products, filter } = this.props
        return (
            <React.Fragment>
                <Navigator
                    to="/products/create"
                    title="Products"
                    buttonName="Create Product"
                />
                <Search query={filter.query} onSearch={this.props.onProductSearchFilter} />
                <div className="product-list pr-4 pl-4">
                    {products.length > 0 &&
                        products.map((product, index) => {
                            return <Product
                                onDelete={this.onProductDelete}
                                key={product.id}
                                product={product}
                            />
                        })
                    }
                    {
                        products.length <= 0 &&
                        <ProductEmpty />
                    }
                </div>
            </React.Fragment>
        )
    };
}

ProductList.propType = {
    products: PropTypes.array.isRequired
}

export default ProductList