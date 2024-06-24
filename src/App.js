import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import MoviesList from "./pages/MoviesList";
import SingleMovie from "./pages/SingleMovie";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import {Data} from "./Components/Data";

function App() {
  const [search, setSearch] = useState("");
  const [rating, setRate] = useState(0);
   const [moviesData, setMoviesData] = useState(Data);

  return (
    <div>
      <NavBar rating={rating} setSearch={setSearch} setRate={setRate} />
      {/* <MoviesList rating={rating} search={search} /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="Movies"
          element={
            <MoviesList
              moviesData={moviesData}
              setMoviesData={setMoviesData}
              rating={rating}
              search={search}
            />
          }
        />

        <Route path="/Movies/:id" element={<SingleMovie moviesData={moviesData} />} />
      </Routes>
    </div>
  );
}

export default App;
