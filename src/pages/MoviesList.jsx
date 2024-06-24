import React, {  useState } from "react";
import MovieCard from "../Components/MovieCard";
// import { Data } from "../Components/Data";
import AddMovies from "../Components/AddMovies";
import "../Components/style.css";
function MoviesList({ search, rating, setMoviesData ,moviesData}) {
  // const [moviesData, setMoviesData] = useState(Data);
  console.log(moviesData);
  const [newMovie, setNewMovie] = useState({
    poster: "",
    titre: "",
    année: 0,
    rating: 0,
    trailer: "",
  });
  const filteredMovies = moviesData
    .filter((movie) =>
      movie.titre.toLowerCase().startsWith(search.toLowerCase())
    )
    .filter((movie) => rating === 0 || movie.rating === rating);

  console.log("Filtered Movies:", filteredMovies);

  return (
    <div>
      <AddMovies
        newMovie={newMovie}
        setNewMovie={setNewMovie}
        setMoviesData={setMoviesData}
        moviesData={moviesData}
      />
      <div id="movies-list-container">
        {moviesData
          .filter((movie) =>
            movie.titre.toLowerCase().startsWith(search.toLowerCase())
          )
          .filter((movie) => rating === 0 || movie.rating === rating)
          .map((movie, i) => (
            <MovieCard key={i} {...movie} />
          ))}
      </div>
    </div>
  );
}

export default MoviesList;
