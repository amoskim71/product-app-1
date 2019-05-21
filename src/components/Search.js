import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
    onChangeHandle = (e) => {
        this.props.onSearch(e.target.value)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="text"
                        className="form-control form-control-lg"
                        value={this.props.query}
                        onChange={this.onChangeHandle}
                        placeholder="Search.." />
                </div>
            </div>
        )
    }

}

Search.propTypes = {
    onSearch: PropTypes.func.isRequired
}

export default Search;