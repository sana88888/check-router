import React, { useEffect, useState } from "react";

import "./style.css";
import MainButton from "./MainButton";
import {Link} from "react-router-dom";


function MovieCard({ poster, titre, année, rating,id }) {
  const [counter, setCounter] = useState(0);

  return (
    <div id="movie-card">
      <img src={poster} alt="" />
      <h3>{titre}</h3>
      <h5>{année}</h5>
      <div className="rating">
        <span>{"⭐".repeat(rating)}</span>

        <MainButton text="Plus" id={id} />
      </div>
    </div>
  );
}

export default MovieCard;
