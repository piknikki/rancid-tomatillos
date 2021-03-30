import React from 'react';
import PropTypes from 'prop-types'
import './MovieCard.css'
// import moment from 'moment';

const MovieCard = ({ id, poster_path, title, average_rating, release_date, getMovie }) => {
  const rottenTomatillos = '🤢'
  // const splitDate = release_date.split('-').join('')

  return (
    <article className="movie-card" id={id} onClick={() => getMovie(id)}>
      <img className="poster" src={poster_path} alt={title} />
      <p className="movie-ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</p>
      <section className="movie-info">
        <h3 className="movie">{title}</h3>
        <h5 className="movie-release">{release_date}</h5>
      </section>

    </article>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string
}

export default MovieCard;
