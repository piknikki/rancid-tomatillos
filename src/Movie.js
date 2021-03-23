import React from 'react';
import './Movie.css'

const Movie = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
  return (
    <article id={id}>
      <img className="poster" src={poster_path} alt={title} />
      <p className="movie-title">{title}</p>
    </article>
  )
}

export default Movie;
