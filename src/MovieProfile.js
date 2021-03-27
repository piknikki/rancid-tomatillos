import React from 'react';
import './MovieProfile.css'
import {Link} from "react-router-dom";

const MovieProfile = (props) => {
  console.log(props)
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

  const rottenTomatillos = '🤢'

  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  const formattedCurrency = (value) => numberFormat2.format(value)

  return (
    <section className="profile">
      <span className="ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</span>
      <article className="profile-container" id={id}>
        <img id="backdrop" className="backdrop" src={backdrop_path} alt={title}/>

        <div className="content-wrapper">
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

          {/*<button className="btn">*/}
          {/*  <span className="fa-stack fa-2x">*/}
          {/*    <i className="fal fa-badge fa-stack-2x fa-sm"> </i>*/}
          {/*    <i className="fal fa-badge-sheriff fa-stack-1x fa-inverse fa-lg"> </i>*/}
          {/*   <i className="fal fa-asterisk fa-stack-1x fa-inverse fa-lg"> </i>*/}
          {/*  </span>*/}
          {/*</button>*/}
        </div>
      </article>
    </section>
  )
}

export default MovieProfile;
