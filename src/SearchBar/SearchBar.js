import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    }
  }

  getSearchTerm = (event) => {
    event.preventDefault()
    this.setState({ searchTerm: event.target.value })
  }

  render() {

    return (
      <div className="searchbar-container">
        <h1>Welcome.</h1>
        <h3>We have all the movies. Explore now.</h3>
        <form>
          <label>
            <input
              type="text"
              placeholder="Search for a movie......."
              onChange={this.getSearchTerm}
            />
          </label>
          <input
            className="searchBtn"
            type="submit"
            value="Search"
            onClick={this.props.findMovie(this.state.searchTerm)}
          />
        </form>
      </div>
    )
  }
}
