import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
    ;
class Navigator extends Component {
    render() {
        const { title, to, buttonName } = this.props;
        return (
            <div className="navigator mt-2 mb-2">
                <h4 className="d-inline">{title}</h4>
                <Link to={to} className="btn btn-info btn-sm float-right">{buttonName}</Link>
            </div>
        );
    }
}

Navigator.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    buttonName: PropTypes.string.isRequired
}

export default Navigator;