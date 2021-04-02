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

  // todo ==> hook up delete button on MovieProfile -- use redirect in router
  deleteMovie = (id) => {
    this.setState({ allMovies: this.state.allMovies.filter(movie => movie.id !== id)} )
  }

  findMovie = (searchTerm) => {
    this.setState({ foundMovies: this.allMovies.find(movie => movie.title.includes(searchTerm))} )
  }

  displayMovies = () => {
    if (this.state.foundMovies.length > 0) {
      return (
        <section className="wrapper">
          <SearchBar findMovie={this.findMovie}/>
          <Movies movies={this.state.foundMovies} getMovie={this.getMovie}/>
        </section>
      )
    } else if (this.state.allMovies) {
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
          <h2>{this.state.error}</h2>
          }

          {!this.state.error && !this.state.allMovies.length &&
          <h2>Loading...</h2>
          }

          <Switch>
            <Route
              exact
              path="/movie/:id"
              render={() => {
                if (this.state.currentMovie) {
                  return <MovieProfile
                    data={this.state.currentMovie}
                    year={this.state.currentMovieDate}
                    resetCurrentMovie={this.resetCurrentMovie}
                    deleteMovie={this.deleteMovie}
                  />
                }
              }}
            />

            <Route
              exact
              path="/"
              render={() => {
                return this.displayMovies()
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
