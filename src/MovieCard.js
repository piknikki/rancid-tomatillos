import React from 'react';
import PropTypes from 'prop-types'
import './MovieCard.css'
import {Link} from "react-router-dom";

const MovieCard = ({ id, poster_path, title, average_rating, release_date, getMovie }) => {
  const rottenTomatillos = '🤢'

  return (
    <Link to={`/${id}`} >
      <article id={id} onClick={() => getMovie(id)}>
        <img className="poster" src={poster_path} alt={title} />
        <p className="movie-ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</p>
        <p className="movie-since">since {release_date}</p>
      </article>
    </Link>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string
}

export default MovieCard;
