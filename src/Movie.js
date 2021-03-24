import React from 'react';
import './Movie.css'

const Movie = ({ id, poster_path, backdrop_path, title, average_rating, release_date }) => {
  console.log(Math.floor(average_rating))

  const rottenTomatillos = '🤢'

  return (
    <article id={id}>
      <img className="poster" src={poster_path} alt={title} />
      <p className="movie-title">{rottenTomatillos.repeat(Math.floor(average_rating))}</p>
      <p className="movie-subtitle">since {release_date}</p>
    </article>
  )
}

export default Movie;
