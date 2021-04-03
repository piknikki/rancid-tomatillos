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

  sendSearchTerm = (event) => {
    event.preventDefault()
    if (this.state.searchTerm) {
      try {
        this.props.findMovie(this.state.searchTerm)
      } catch ({  message }) { // this is the message that's part of error handling
        this.setState({ searchTerm: '' })
      }
    } else {
      this.setState({ feedback: 'Something went wrong. Please try a new search.' })
    }

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
              onChange={(event) => {
                return this.setState({searchTerm: event.target.value})
              }}
            />
          </label>

          {this.state.feedback && <p>{this.state.feedback}</p>}

          <button
            className="searchBtn"
            onClick={() => this.sendSearchTerm}
          >Submit</button>
        </form>
      </div>
    )
  }
}
