import React from 'react';
import './MovieProfile.css'
import Buttons from "../Buttons/Buttons";

const MovieProfile = (props) => {
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

  const styles = {
    header: {
      backgroundImage: `url(${backdrop_path})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative'
    },

    contentContainer: {
      height: '100%',
      width: '100%',
      background: 'linear-gradient(0deg, #00000099 30%, #ffffff99 100%)',
      color: 'white'
    }
  }

  return (
      <article className="profile-container" id={id}>
        <div id="backdrop" className="backdrop" style={styles.header}>
          <div style={styles.contentContainer}>
            <Buttons resetCurrentMovie={props.resetCurrentMovie} />

            <div className="content">
              <img className="profile-card" src={poster_path} alt={title}/>
              <div className="wrapper">
                <span className="ratings">{tomatillos.repeat(Math.floor(average_rating))}</span>
                <h1 className="movie-title">{title} <span className="year">(2020)</span></h1>
                <span className="runtime"> Run time: {runtime}m</span>
                <p className="tagline"><em>{tagline}</em></p>
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
