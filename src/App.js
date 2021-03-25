import React, { Component } from 'react'
import logo from './logo.png';
import './App.css';
import Movie from "./Movie";
import MovieProfile from "./MovieProfile"

class App extends Component {
  _isLoaded = false

  constructor() {
    super();

    this.state = {
      allMovies: [],
      currentMovie: this.getMovie(659986), // change this once onClick is fixed, to {}
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

  getMovie(id) {
    this._isLoaded = true; // this isn't working correctly for getMovie, maybe because I'm calling it in the constructor

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      .then(currentMovie => this.setState({ currentMovie: currentMovie.movie }))
      .catch(error => this.setState({ error: error.message }))
  }

  showAll() {
    this.currentMovie = {}
  }

  componentWillUnmount() {
    this._isLoaded = false;
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="title">Rancid Tomatillos</span>
          <section className="cards">
            {this.state.allMovies.map((movie) => {
              return <Movie
                key={movie.id}
                id={movie.id}
                poster_path={movie.poster_path}
                backdrop_path={movie.backdrop_path}
                title={movie.title}
                average_rating={movie.average_rating}
                release_date={movie.release_date}
              />
            })}
          </section>
          {this.state.currentMovie &&
          <section className="profile">
            <MovieProfile
              key={this.state.currentMovie.id}
              data={this.state.currentMovie}
            />
          </section>
          }
        </header>
      </div>
    )
  }
}

export default App;
