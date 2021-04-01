import React from 'react'
import { Link } from "react-router-dom";

const Buttons = (props) => {
  return (
    <div className="button-container">
      <Link to={`/`} >
        <button className="go-back btn" onClick={() => props.resetCurrentMovie()}>
          <i className="fas fa-arrow-left"> </i>
        </button>
      </Link>

      <Link to={`/`} >
        <button className="delete btn" onClick={() => props.deleteMovie(props.id)}>
          <i className="fas fa-times"> </i>
        </button>
      </Link>

    </div>
  )
}

export default Buttons
