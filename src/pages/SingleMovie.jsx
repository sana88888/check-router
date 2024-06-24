import React from "react";
import "../Components/style.css";
import { useParams } from "react-router-dom";
// import { Data } from "../Components/Data";
import ReactPlayer from "react-player/youtube";
function SingleMovie({ moviesData }) {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === id);

  return (
    <div id="single-movie-container">
      <h1>{movie?.titre}</h1>
      <ReactPlayer url={movie.trailer} />
    </div>
  );
}

export default SingleMovie;
