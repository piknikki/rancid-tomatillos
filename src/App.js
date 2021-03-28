import React, { Component } from 'react'
import logo from './logo.png';
import './App.css';
import MovieProfile from "./MovieProfile"
import Movies from "./Movies";
import { Route } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allMovies: [],
      currentMovie: {},
      error: ''
    }
  }

  componentDidMount() {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`)
      .then(response => response.json())
      .then(allMovies => this.setState({ allMovies: allMovies.movies }))
      .catch(error => this.setState({ error: error.message }))
  }

  getMovie = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      // .then(data => console.log(data.movie))
      .then(currentMovie => this.setState({ currentMovie: currentMovie.movie }))
      .catch(error => this.setState({ error: error.message }))
  }

  resetCurrentMovie = () => {
     this.setState({ currentMovie: {} })
  }

  // todo ==> hook up delete button on MovieProfile -- use redirect in router
  // deleteMovie = (id) => {
  //
  // }


  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <span className="title">Rancid Tomatillos</span>
        </header>
        <main>
          {!!this.state.error &&
          <h2>{this.state.error}</h2>
          }

          {!this.state.error && !this.state.allMovies.length &&
          <h2>Loading...</h2>
          }

          <Route
            exact
            path="/:id"
            render={() => {
              if (this.state.currentMovie) {
                return <MovieProfile
                  data={this.state.currentMovie}
                  resetCurrentMovie={this.resetCurrentMovie}
                />
              }
            }}
          />

          <Route
            exact
            path="/"
            render={() => <section className="wrapper">
              <Movies movies={this.state.allMovies} getMovie={this.getMovie}/>
            </section>}
          />
        </main>
      </div>
    )
  }
}

export default App;
