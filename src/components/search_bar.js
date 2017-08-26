import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    render() {
        return (
            <div className="form-group col-md-6">
                <input type="text" className="form-control form-control-lg search-bar" onChange = { event => this.onInputChange(event.target.value)} placeholder="Search" />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;
