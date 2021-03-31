import React from 'react'
import './NoRoute.css'
import { Link } from "react-router-dom";

const imgUrl = "../images/splat.png"

const styles = {
  header: {
    backgroundImage: `url(${imgUrl})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative'
  },

  contentContainer: {
    height: '100%',
    width: '100%',
    // background: 'linear-gradient(0deg, #00000099 30%, #ffffff99 100%)',
  }
}

const NoRoute = () => {
  return (
    <div className="wrapper-404" style={styles.header}>
      {/*<img src="../images/splat.png" alt="Oops 404 not found"/>*/}
      <div className="oops" style={styles.contentContainer}>
        <h3>Oops!</h3>
        <Link to="/">Go back to main page . . .
          <i className="far fa-home fa-2x"></i>
        </Link>
      </div>
    </div>
  )
}

export default NoRoute
