import React from 'react';
import './MovieProfile.css'
import Buttons from "../Buttons/Buttons";

const MovieProfile = (props) => {
  const year = props.year

  const {
    id,
    title,
    poster_path,
    backdrop_path,
    overview,
    average_rating,
    genres,
    runtime,
    tagline
  } = props.data

  const tomatillos = '🤢'

  return (
      <article className="profile-container" id={id}>
        <div id="backdrop" className="backdrop" style={{backgroundImage: `url(${backdrop_path})`}}>
          <div id="contentContainer" >
            <Buttons
              resetCurrentMovie={props.resetCurrentMovie}
              deleteMovie={props.deleteMovie}
              id={id}
              resetFoundMovies={props.resetFoundMovies}
            />

            <div className="content">
              <img className="profile-card" src={poster_path} alt={title}/>
              <div className="profile-wrapper">
                <span className="ratings">{tomatillos.repeat(Math.floor(average_rating))}</span>
                <h1 className="movie-title">{title} <span className="year">({year})</span></h1>
                <span className="runtime"> Run time: {runtime}m</span>
                {tagline ? <p className="tagline"><em>{tagline}</em></p> : <p className="tagline"> </p>}
                <h3>Overview</h3>
                <p className="overview">{overview}</p>

                {genres ? genres.map(genre =>
                  <button className="genre" type="button" key={genre}>{genre}</button>
                ) : <p> </p>}
              </div>
            </div>
          </div>
        </div>
      </article>
  )
}

export default MovieProfile;
