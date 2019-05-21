import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/Navigator';

class ProductFrom extends Component {
    constructor(props) {
        super(props);
        this.state = props.product;
        this._mode = (props.product.id && props.product.id) ? 'Edit' : 'Create';
    }

    onChagneHandle = (e) => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        //Prevent form submission
        e.preventDefault();
        this.props.onProductSave(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="row">
                <div className="form-container col-md-8 m-auto">
                    <Navigator to="/" title={this._mode + ' Product..'} buttonName="back to products" />
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                        <div className="form-group>">
                            <label>Name:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.title}
                                onChange={this.onChagneHandle}
                                name="title">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>

                            <textarea
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChagneHandle}
                                rows={5}
                                name="description"
                            />
                        </div>

                        <div className="form-group>">
                            <label>Price:</label>
                            <input type="number"
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChagneHandle}
                                name="price">
                            </input>
                        </div>
                        <div className="form-group mt-1">
                            <button className="btn btn-primary">{this._mode}</button>
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