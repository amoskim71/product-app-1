import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Product extends Component {
    render() {
        const { product, onDelete } = this.props;
        const productEditUrl = '/products/' + product.id + '/edit'
        return (
            <div className="product" style={{ display: 'inline' }}>
                <div className="card d-inline-block m-2" style={{ width: '320px' }}>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>
                        <Link to={productEditUrl}
                            className="btn btn-warning mr-2"
                        >Edit </Link>

                        <button className="btn btn-danger"
                            onClick={(e) => onDelete(product)}
                        >Delete</button>
                    </div>
                </div>
            </div >
        );
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Product;