import React from 'react';
import './MovieProfile.css'
import {Link} from "react-router-dom";

const MovieProfile = (props) => {
  const {
    id,
    title,
    backdrop_path,
    release_date,
    overview,
    average_rating,
    genres,
    budget,
    revenue,
    runtime,
    tagline
  } = props.data

  const tomatillos = '🤢'

  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  const formattedCurrency = (value) => numberFormat2.format(value);

  const styles = {
    header: {
      backgroundImage: `url(${backdrop_path})`,
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },

    contentContainer: {
      height: '100%',
      width: '100%',
      background: 'linear-gradient(0deg, #00000088 30%, #ffffff44 100%)',
      color: 'white'
    }
  }

  return (
    <section className="profile">
      <span className="ratings">{tomatillos.repeat(Math.floor(average_rating))}</span>
      <article className="profile-container" id={id}>
        {/*<img id="backdrop" className="backdrop" src={backdrop_path} alt={title}/>*/}
        <div id="backdrop" className="backdrop" style={styles.header}>
          <div className="content-container" style={styles.contentContainer}>
            <div className="content">
              <h1 className="movie-title">{title}</h1>
              <h2 className="tagline">{tagline}</h2>
              <p className="overview">{overview}</p>
              <p>
                <span className="release">Release Date: {release_date} </span>
                <span className="runtime"> Run time: {runtime}</span>
              </p>

              {genres ? genres.map(genre =>
                <button className="genre" type="button" key={genre}>{genre}</button>
              ) : <p> </p>}

              <p>Budget: {formattedCurrency(budget)}</p>
              <p>Revenue: {formattedCurrency(revenue)}</p>
              <Link to={`/`} >
                <button className="go-back btn" onClick={() => props.resetCurrentMovie()}>
                  <i className="fas fa-arrow-left"> </i>
                </button>
              </Link>
              {/* todo ==> make the delete button a redirect? */}
              <button className="delete btn">
                <i className="fas fa-times"> </i>
              </button>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default MovieProfile;
