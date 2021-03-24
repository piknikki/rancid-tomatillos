import React from 'react';
import './MovieProfile.css'

const MovieProfile = (props) => {

  const {   id,
    title,
    // poster_path,
    backdrop_path,
    // release_date,
    // overview,
    average_rating,
    // genres,
    // budget,
    // revenue,
    // runtime,
    tagline } = props.data

  const rottenTomatillos = '🤢'

  return (
    <article>
      <img className="backdrop" src={backdrop_path} alt={title}/>
      <div className="content-wrapper">
        <h1 className="movie-title">{title}</h1>
        <span className="movie-ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</span>
        <h2>{tagline}</h2>
      </div>


    </article>
  )
}

export default MovieProfile;
