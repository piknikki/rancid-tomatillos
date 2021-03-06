import React, { Component } from 'react'
import logo from '../assets/tomatillo3.png';
import './App.css';
import MovieProfile from "../MovieProfile/MovieProfile"
import Movies from "../Movies/Movies";
import { Link, Route, Switch } from 'react-router-dom';
import Footer from "../Footer/Footer";
import { getAllMovies, getOneMovie } from "../apiCalls";
import NoRoute from "../NoRoute/NoRoute";
import SearchBar from "../SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();

    this.state = {
      allMovies: [],
      foundMovies: [],
      currentMovie: {},
      currentMovieDate: '',
      error: ''
    }
  }

  componentDidMount() {
    getAllMovies()
      .then(allMovies => this.setState({ allMovies: allMovies.movies }))
      .catch(error => this.setState({ error: error.message }))
  }

  getMovie = (id) => {
    getOneMovie(id)
      .then(currentMovie => this.setState({
        currentMovie: currentMovie.movie,
        currentMovieDate: currentMovie.movie.release_date.split('-')[0]
      }))
      .catch(error => this.setState({ error: error.message }))
  }

  resetCurrentMovie = () => {
     this.setState({
       currentMovie: {}
     })
  }

  resetFoundMovies = () => {
    this.setState({
      foundMovies: []
    })
  }

  deleteMovie = (id) => {
    this.setState({ allMovies: this.state.allMovies.filter(movie => movie.id !== id), foundMovies: []} )
  }

  findMovie = (searchTerm) => {
    this.setState({ foundMovies: this.state.allMovies.filter(movie => movie.title.toLowerCase().includes(searchTerm))} )
  }

  // todo ==> use this once I figure out the search bar situation
  displayMovies = () => {
    if (this.state.foundMovies.length > 0) {
      return (
        <section className="wrapper">
          {/*<SearchBar findMovie={this.findMovie}/>*/}
          <Movies movies={this.state.foundMovies} getMovie={this.getMovie}/>
        </section>
      )
    } else {
      return (
        <section className="wrapper">
          <SearchBar findMovie={this.findMovie}/>
          <Movies movies={this.state.allMovies} getMovie={this.getMovie}/>
        </section>
      )
    }
  }

  render() {
    return (
      <div className="App">
        <header>
          <Link to="/" className="header-link">
            <img src={logo} className="App-logo" alt="logo" />
          </Link>
          <span className="title">Rancid Tomatillos</span>
        </header>

        <main>
          {!!this.state.error &&
          <h2 className="error-feedback">{this.state.error}</h2>
          }

          {!this.state.error && !this.state.allMovies.length &&
          <h2 className="loading">Loading...</h2>
          }

          <Switch>
            <Route
              exact
              path="/"
              render={this.displayMovies}
            />

            <Route
              exact
              path="/movie/:id"
              render={() => {
                if (this.state.currentMovie) {
                  return <MovieProfile
                    data={this.state.currentMovie}
                    year={this.state.currentMovieDate}
                    resetCurrentMovie={this.resetCurrentMovie}
                    resetFoundMovies={this.resetFoundMovies}
                    deleteMovie={this.deleteMovie}
                  />
                }
              }}
            />

            <Route path="*" render={() => <NoRoute />} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
