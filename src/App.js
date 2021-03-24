import React, { Component } from 'react'
import logo from './logo.png';
import './App.css';
import movieData from "./data";
import Movie from "./Movie";
import MovieProfile from "./MovieProfile"

const defaultMovie = {
  id: 1,
  title: "Fake Movie Title",
  poster_path: "https://image.tmdb.org/t/p/original//7G2VvG1lU8q758uOqU6z2Ds0qpA.jpg",
  backdrop_path: "https://image.tmdb.org/t/p/original//oazPqs1z78LcIOFslbKtJLGlueo.jpg",
  release_date: "2019-12-04",
  overview: "Some overview that is full of buzzwords to attempt to entice you to watch this movie! Explosions! Drama! True love! Robots! A cute dog!",
  average_rating: 6,
  genres: [{id: 18, name: "Drama"}, {id: 42, name: "Comedy"}],
  budget: 63000000,
  revenue: 100853753,
  runtime: 139,
  tagline: "It's a movie!"
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      defaultMovie,
      allMovies: movieData.movies,
      currentMovie: {}
    }
  }

  showProfile = (id) => {
    const currentMovie = this.state.allMovies.find(movie => movie.id === id)
    this.setState({ currentMovie: currentMovie })
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
                showProfile={this.showProfile}
              />
            })}
          </section>
          {this.state.defaultMovie &&
            <section className="profile">
              <MovieProfile
                key={defaultMovie.id}
                data={defaultMovie}
              />
            </section>
          }

        </header>
      </div>
    )
  }
}

export default App;
