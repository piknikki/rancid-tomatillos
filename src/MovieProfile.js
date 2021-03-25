import React, { useState } from 'react';
import './MovieProfile.css'

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
    tagline } = props.data

  const rottenTomatillos = '🤢'

  const options2 = { style: 'currency', currency: 'USD' };
  const numberFormat2 = new Intl.NumberFormat('en-US', options2);

  const formattedCurrency = (value) => numberFormat2.format(value)

  const [isMousedOver, setMouseOver] = useState(false)
  const handleMouseOver = () => {
    setMouseOver(true)
  }
  const handleMouseOut = () => {
    setMouseOver(false)
  }

  return (
    <>
      <span className="ratings">{rottenTomatillos.repeat(Math.floor(average_rating))}</span>
      <article className="profile-container" id={id}>
        <img className="backdrop" src={backdrop_path} alt={title}/>
        <div className="content-wrapper">
          <h1 className="movie-title">{title}</h1>
          <h2 className="tagline">{tagline}</h2>
          <p className="overview">{overview}</p>
          <p>
            <span className="release">Release Date: {release_date} </span>
            <span className="runtime"> Run time: {runtime}</span>
          </p>
          <p>{genres.map(genre =>
            <button className="genre" type="button" key={genre}>{genre}</button>
          )}</p>
          <p>Budget: {formattedCurrency(budget)}</p>
          <p>Revenue: {formattedCurrency(revenue)}</p>
          <button
            className="go-back btn"
            style={{ background: isMousedOver ? "black" : "white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            ⬅
          </button>
          <button
            className="delete btn"
            style={{ background: isMousedOver ? "black" : "white" }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}>
            ❌
          </button>
        </div>
      </article>
    </>
  )
}

export default MovieProfile;
