import React, { Component } from 'react';
import Alert from './Alert';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <Alert title="Page Not Found.">
                <p>The page you requested could not be found.
                    Please go back the home page.</p>
                <Link to="/"
                    className="btn btn-primary btn-sm">Go To HomePage</Link>
            </Alert>
        );
    }
}

export default PageNotFound;