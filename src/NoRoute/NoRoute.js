import React from 'react'
import './NoRoute.css'
import { Link } from "react-router-dom";

import splat from "../images/splat.png"

const styles = {
  header: {
    backgroundImage: `url(${splat})`,
    height: '90vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  },

  contentContainer: {
    height: '100%',
    width: '100%',
    background: 'linear-gradient(0deg, #00000050 20%, #ffffff50 100%)',
  }
}

const NoRoute = () => {
  return (
    <div className="wrapper-404" style={styles.header}>
      <div className="oops" style={styles.contentContainer}>
        <h3>Oops!</h3>
        <Link to="/" className="btn">Go back to main page . . .
          <i className="far fa-home fa-2x"></i>
        </Link>
      </div>
    </div>
  )
}

export default NoRoute
