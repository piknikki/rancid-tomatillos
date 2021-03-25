import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css'

const MovieCard = ({ id, poster_path, backdrop_path, title, average_rating, release_date, showProfile }) => {
  const rottenTomatillos = '🤢'

  // const handleClick = (id) => {
  //   const currentMovie = this.state.allMovies.find(movie => movie.id === id)
  //   this.setState({ currentMovie: currentMovie })
  // }

  const getMovie = (id) => {
    console.log(id)

    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
      .then(response => response.json())
      // .then(data => console.log(data.movie))
      .then(currentMovie => this.setState({ currentMovie }))
      .catch(error => this.setState({ error: error.message }))
  }

  return (
    <article id={id} onClick={() => getMovie(id)}>
      <img className="poster" src={poster_path} alt={title} />
      <p className="movie-ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</p>
      <p className="movie-since">since {release_date}</p>
    </article>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string
}

export default MovieCard;
