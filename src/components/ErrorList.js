import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class ErrorList extends Component {
    static propTypes = {
        errors: PropTypes.array.isRequired,
    }
    render() {
        const { errors } = this.props;
        return (
            <Fragment>
                {
                    errors.length > 0 && (
                        <div className="alert alert-danger" role="alert">
                            <ul>
                                {
                                    errors.map((error, index) => {
                                        return <li key={index}>{error}</li>
                                    })
                                }
                            </ul>
                        </div>
                    )
                }

            </Fragment>
        )
    }

}
export default ErrorList;