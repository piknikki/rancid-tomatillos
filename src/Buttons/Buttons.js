import React from 'react'
import { Link } from "react-router-dom";
import './Buttons.css'

const Buttons = (props) => {
  return (
    <div className="button-container">
      <Link to={'/'} id="go-back" className="go-back btn" onClick={() => props.resetCurrentMovie()}>
        <i className="fas fa-arrow-left"> </i>
      </Link>

      <Link to={'/'} id="home" className="home btn" onClick={() => props.resetFoundMovies()}>
        <i className="far fa-home"> </i>
      </Link>

      <Link to={'/'} id="delete" className="delete btn" onClick={() => props.deleteMovie(props.id)}>
        <i className="fas fa-times"> </i>
      </Link>
    </div>
  )
}

export default Buttons
