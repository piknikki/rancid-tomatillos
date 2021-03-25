import React from 'react';
import MovieCard from "./MovieCard";

const Movies = ({movies}) => {
  // do the map
  const movieCards = movies.map(movie => {
      return (
          <MovieCard
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            backdrop_path={movie.backdrop_path}
            title={movie.title}
            average_rating={movie.average_rating}
            release_date={movie.release_date}
            // showProfile={this.handleClick}
          />
        )

    })

  return (
    <section className="cards">
      {movieCards}
    </section>
  )
}

export default Movies;
