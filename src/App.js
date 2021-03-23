import logo from './logo.png';
import './App.css';
import movieData from "./data";
import Movie from "./Movie";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="title">Rancid Tomatillos</span>
        <section className="cards">
          {movieData.movies.map((movie) => {
            return <Movie
              key={movie.id}
              id={movie.id}
              poster_path={movie.poster_path}
              backdrop_path={movie.backdrop_path}
              title={movie.title}
              average_rating={movie.average_rating}
              release_date={movie.release_date}
            />
          })}
        </section>
      </header>

    </div>
  );
}

export default App;

// {
//   "id": 694919,
//   "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
//   "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
//   "title": "Money Plane",
//   "average_rating": 6.666666666666667,
//   "release_date": "2020-09-29"
// }
//*<img className="poster" src="https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg" alt="poster" />*/
