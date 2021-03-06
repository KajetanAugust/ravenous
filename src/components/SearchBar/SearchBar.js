import React from "react";
import './SearchBar.css'


class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            term:'',
            location:'',
            sortBy:'best_match',
        }

        this.sortByOptions = {
            "Best Match": 'best_match',
            "Highest Rated": 'rating',
            "Most Reviewed": 'review_count',
        }

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    // checking for active sorting option
    getSortByClass(sortByOption) {
        if(this.state.sortBy === sortByOption) {
            return 'active'
        } else {
            return ''
        }
    }

    // handling changes of sort options
    handleSortByChange(sortByOption) {
        this.setState({
            sortBy: sortByOption
        })
    }

    // handling change of search term
    handleTermChange(e) {
        this.setState({
            term: e.target.value,
        })
    }

    //handling change of location change
    handleLocationChange(e) {
        this.setState({
            location: e.target.value,
        })
    }

    // handing search, passing input to searchYelp function in App.js
    handleSearch(e) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

        e.preventDefault();
    }

    // rendering sorting options by iterating through this.state.sortByOptions and creating <li> elements for each of them
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue )}> {sortByOption} </li>;
        })
    }

    // rendering search bar component content
    render() {
        return(
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input
                        placeholder="Search Businesses"
                        onChange={this.handleTermChange}
                    />
                    <input
                        placeholder="Where?"
                        onChange={this.handleLocationChange}
                    />
                </div>
                <div
                    className="SearchBar-submit"
                    onClick={this.handleSearch}
                >
                    <a href="#" >Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar;