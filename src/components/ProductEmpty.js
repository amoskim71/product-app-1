import React, { Component } from 'react';
import Alert from '../components/Alert';
import { Link } from 'react-router-dom';

class ProductEmpty extends Component {
    render() {
        return (
            <div className="product-empty">
                <Alert title="Add Product to your shop | Clear search filter.">
                    <p>Your store is empty add product to your store</p>
                    <Link to="/products/create"
                        className="btn btn-primary btn-sm">Add Products</Link>
                </Alert>
            </div>
        );
    };
};

export default ProductEmpty;