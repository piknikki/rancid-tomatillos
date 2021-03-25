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
      currentMovie: null,
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

  goBack = () => {
     this.setState({ currentMovie: null })
  }

  // todo ==> hook up delete button on MovieProfile
  // deleteMovie = (id) => {
  //
  // }

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <Route path="/" component={ App } />
          <span className="title">Rancid Tomatillos</span>
            {!!this.state.error &&
              <h2>{this.state.error}</h2>
            }

            {!this.state.error && !this.state.allMovies.length &&
              <h2>Loading...</h2>
            }

            {!this.state.currentMovie &&
              <Movies movies={this.state.allMovies} getMovie={this.getMovie}/>
            }

            {this.state.currentMovie &&
              <section className="profile">
                <MovieProfile
                  key={this.state.currentMovie.id}
                  data={this.state.currentMovie}
                  goBack={this.goBack}
                />
              </section>
            }
        </header>
      </div>
    )
  }
}

export default App;
