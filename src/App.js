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
      .then(currentMovie => this.setState({ currentMovie: currentMovie }))
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
              <MovieProfile
                key={this.state.currentMovie.movie.id}
                data={this.state.currentMovie.movie}
                goBack={this.goBack}
              />
            }

            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/:id"*/}
            {/*  render={({match}) => {*/}
            {/*    const { id } = match.params;*/}
            {/*    const movieToRender = this.state.allMovies.filter(movie => movie.id === Number(id))*/}
            {/*    console.log("MOVIE TO RENDER: ", movieToRender)*/}
            {/*    return <Movies movies={movieToRender} getMovie={this.getMovie}/>*/}
            {/*  }}*/}
            {/*/>*/}

            {/*<Route*/}
            {/*  exact*/}
            {/*  path="/"*/}
            {/*  render={() => <Movies movies={this.state.allMovies} getMovie={this.getMovie}/>}*/}
            {/*/>*/}

        </header>
      </div>
    )
  }
}

export default App;
