import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/Navigator';

class ProductFrom extends Component {
    constructor(props) {
        super(props);
        this.state = props.product;
    }

    componentWillMount() {
        console.log(this.state)
    }
    render() {
        return (
            <div className="row">
                <div className="form-container col-md-8 m-auto">
                    <Navigator to="/" title="Manage Product.." buttonName="back to products" />
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                        <div className="form-group>">
                            <label>Name:</label>
                            <input type="text" className="form-control" value="" name="productName"></input>
                        </div>
                        <div className="form-group>">
                            <label>Description:</label>
                            <textarea className="form-control" id="description" rows="5"></textarea>
                        </div>

                        <div className="form-group>">
                            <label>Price:</label>
                            <input type="number" className="form-control" value="" name="price"></input>
                        </div>
                        <div className="form-group mt-1">
                            <button className="btn btn-primary">Save</button>
                        </div>
                    </form >
                </div>
            </div>
        );
    }
}

ProductFrom.propTypes = {
    product: PropTypes.object
};

export default ProductFrom;