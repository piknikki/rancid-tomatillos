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
      {/* todo ==> make the delete button a redirect? */}
      <button className="delete btn">
        <i className="fas fa-times"> </i>
      </button>
    </div>
  )
}

export default Buttons
