import React from 'react';
import PropTypes from 'prop-types'
import './Movie.css'

const MovieCard = ({ id, poster_path, backdrop_path, title, average_rating, release_date, getMovie }) => {
  const rottenTomatillos = '🤢'

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
