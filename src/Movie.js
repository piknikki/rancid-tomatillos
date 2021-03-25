import React from 'react';
import './Movie.css'

const Movie = ({ id, poster_path, backdrop_path, title, average_rating, release_date, showProfile }) => {
  const rottenTomatillos = '🤢'

  // const handleClick = (id) => {
  //   const currentMovie = this.state.allMovies.find(movie => movie.id === id)
  //   this.setState({ currentMovie: currentMovie })
  // }

  const showMovie = (id) => {
    // const currentMovie = this.state.allMovies.find(movie => movie.id === id)
    showProfile(id)
    console.log(id)
    // this.setState({ currentMovie: currentMovie })
  }

  return (
    <article id={id} onClick={() => showMovie(id)}>
      <img className="poster" src={poster_path} alt={title} />
      <p className="movie-ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</p>
      <p className="movie-since">since {release_date}</p>
    </article>
  )
}

export default Movie;
