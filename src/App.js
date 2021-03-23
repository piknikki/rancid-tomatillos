import logo from './logo.png';
import './App.css';
import movieData from "./data";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} className="App-logo" alt="logo" />
        <span className="title">Rancid Tomatillos</span>
        {movieData.movies.map((movie) => {
          return <h3>{movie.title}</h3>
        })}
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
