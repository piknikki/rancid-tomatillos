import React, { Component } from 'react'
import './SearchBar.css'

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      feedback: ''
    }
  }

  changeHandler = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  submitSearch = (event) => {
    event.preventDefault()
    this.props.findMovie(this.state.searchTerm)
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
              name="searchTerm"
              onChange={this.changeHandler}
            />
          </label>

          {this.state.feedback && <p>{this.state.feedback}</p>}

          <button
            className="searchBtn"
            onClick={this.submitSearch}
          >Submit</button>
        </form>
      </div>
    )
  }
}
