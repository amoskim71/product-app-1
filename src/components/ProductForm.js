import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navigator from '../components/Navigator';
import ErrorList from '../components/ErrorList';
import { genreateFakeProduct } from '../utils/dataProvider';

class ProductFrom extends Component {
    constructor(props) {
        super(props);
        this.state ={};
        this.state.product = JSON.parse(JSON.stringify(props.product));
        this.state.errors =[];
        this._mode = (this.state.product.id === 'undefined' || this.state.product.id === null)
            ? 'Create'
            : 'Edit';
    };

    //Simple validation
    validate() {
        let requiredFields = ['title', 'description', 'price'];
        this.setState({
            errors: []
        });
        let errors = []
        for (const [key, value] of Object.entries(this.state.product)) {
            if (requiredFields.includes(key)) {
                if (!value.trim()) {
                    let errorMessage = `The ${key} field is required`;
                    errors.push(errorMessage);
                }
            }
        }
        this.setState({
            errors: errors
        });
        return errors;
    };

    onChagneHandle = (e) => {

        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            product: Object.assign(this.state.product, {
                [name]: value
            })
        });

        this.validate();
    };

    handleSubmit = (e) => {
        //Prevent form submission
        e.preventDefault();

        //validate the input
        let errors = this.validate();

        //If there is no errors submit the form
        if (errors.length <= 0) {
            this.props.onProductSave(this.state.product);
            this.props.history.push('/');
        }

    }

    onGenerateFakeProduct = (e) => {
        this.setState({
            product: genreateFakeProduct()
        });
    };

    render() {
        return (
            <div className="row">
                <div className="form-container col-md-8 m-auto">
                    <Navigator to="/" title={this._mode + ' Product..'}
                        buttonName="Bact to products" />
                    <form className="mt-4" onSubmit={this.handleSubmit}>
                        <div><ErrorList errors={this.state.errors} /></div>

                        <div className="form-group>">
                            <label>Name:</label>
                            <input type="text"
                                className="form-control"
                                value={this.state.product.title}
                                onChange={this.onChagneHandle}
                                name="title">
                            </input>
                        </div>
                        <div className="form-group">
                            <label>Description:</label>

                            <textarea
                                className="form-control"
                                value={this.state.product.description}
                                onChange={this.onChagneHandle}
                                rows={5}
                                name="description"
                            />
                        </div>

                        <div className="form-group>">
                            <label>Price:</label>
                            <input type="number"
                                className="form-control"
                                value={this.state.product.price}
                                onChange={this.onChagneHandle}
                                name="price">
                            </input>
                        </div>
                        <div className="form-group mt-1">
                            {
                                (this._mode === 'Create') &&
                                <input type="button"
                                    onClick={this.onGenerateFakeProduct}
                                    value="Generate Fake"
                                    className="btn btn-secondary btn-sm mr-2" />

                            }
                            <button
                                className="btn btn-primary btn-sm">{this._mode} Product
                            </button>
                        </div>
                    </form >
                </div>
            </div>
        );
    };
};

ProductFrom.propTypes = {
    product: PropTypes.object
};

export default ProductFrom;