import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class Alert extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        varient: PropTypes.string,
    };

    render() {
        const { title, children } = this.props;
        return (
            <Fragment>
                <div className="alert alert-info m-3" role="alert">
                    <h4 className="alert-heading">{title}</h4>
                    {children}
                </div>
            </Fragment>
        )
    };

}
export default Alert;