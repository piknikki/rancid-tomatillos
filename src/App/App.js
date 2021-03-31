import React, { Component } from 'react'
import logo from '../images/tomatillo3.png';
import './App.css';
import MovieProfile from "../MovieProfile/MovieProfile"
import Movies from "../Movies/Movies";
import { Link, Route, Switch } from 'react-router-dom';
import Footer from "../Footer/Footer";
import { getAllMovies, getOneMovie } from "../apiCalls";
import NoRoute from "../NoRoute/NoRoute";

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
    getAllMovies()
      .then(allMovies => this.setState({ allMovies: allMovies.movies }))
      .catch(error => this.setState({ error: error.message }))
  }

  getMovie = (id) => {
    getOneMovie(id)
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
          <Link to="/" className="header-link">
            <img src={logo} className="App-logo" alt="logo" />
            <span className="title">Rancid Tomatillos</span>
          </Link>
        </header>
        <main>
          {!!this.state.error &&
          <h2>{this.state.error}</h2>
          }

          {!this.state.error && !this.state.allMovies.length &&
          <h2>Loading...</h2>
          }
          <Switch>
            <Route exact path="/no-route" render={() => <NoRoute />} />
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


          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App;
