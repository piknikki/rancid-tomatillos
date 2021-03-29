import React from 'react';
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

const Movies = ({movies, getMovie}) => {
  const movieCards = movies.map(movie => {
    console.log(movie.release_date)
      return (
        <Link to={`/${movie.id}`} >
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
            getMovie={getMovie}
          />
        </Link>
        )

    })

  return (
    <section className="cards">
      {movieCards}
    </section>
  )
}

export default Movies;
