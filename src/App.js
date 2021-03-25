import React, { Component } from 'react'
import logo from './logo.png';
import './App.css';
import MovieProfile from "./MovieProfile"
import Movies from "./Movies";

class App extends Component {
  _isLoaded = false

  constructor() {
    super();

    this.state = {
      allMovies: [],
      currentMovie: null, // change this once onClick is fixed, to {}
      error: ''
    }
  }

  componentDidMount() {
    this._isLoaded = true;

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => response.json())
      .then(allMovies => this.setState({ allMovies: allMovies.movies }))
      .catch(error => this.setState({ error: error.message }))
  }

  // showAll() {
  //   this.currentMovie = {}
  // }

  componentWillUnmount() {
    this._isLoaded = false;
  }

  // todo ==> refactor map over to its own component
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="title">Rancid Tomatillos</span>

            {!this.state.error && this.state.currentMovie
              ?
              <section className="profile">
                <MovieProfile
                  key={this.state.currentMovie.movie.id}
                  data={this.state.currentMovie.movie}
                />
              </section>
              :
              <Movies movies={this.state.allMovies} />}
        </header>
      </div>
    )
  }
}

export default App;
