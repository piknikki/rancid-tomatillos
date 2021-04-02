import React from 'react'
import './NoRoute.css'
import { Link } from "react-router-dom";

import splat from "../assets/splat.png"

const NoRoute = () => {
  return (
    <div className="wrapper-404" style={{backgroundImage: `url(${splat})`}}>
      <div className="oops">
        <h3>Oops!</h3>
        <Link to="/" className="btn">Go back to main page . . .
          <i className="far fa-home fa-2x"></i>
        </Link>
      </div>
    </div>
  )
}

export default NoRoute
