import React, { Component } from 'react'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(e) {
        this.setState({
            searchTerm: e.target.value
        });
    }
    render() {
        return (
            <form className="input-group">
                <input
                    type="text"
                    placeholder="Search a city here..."
                    className="form-control"
                    value={this.state.searchTerm}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button className="btn btn-secondary" type="submit">Submit</button>
                </span>
            </form>
        );
    }
}

export default SearchBar;