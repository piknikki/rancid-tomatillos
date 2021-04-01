import React from 'react'
import { Link } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="button-container">
      <Link to={`/`} className="go-back btn" onClick={() => props.resetCurrentMovie()}>
        <i className="fas fa-arrow-left"> </i>
      </Link>

      <Link to={'/'} className="delete btn" onClick={() => props.deleteMovie(props.id)}>
        <i className="fas fa-times"> </i>
      </Link>
    </div>
  )
}

export default Buttons
