import React from "react";
import "./home.css";
import Navbar from "../navbar/navbar";
import Filter from "../filter/filter";
import Addmovie from "../movies/Addmovie";
import List from "../list/List";
import Details from "../details/details";
import { moviedata } from "../movies/moviesdata";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
function Home() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(1);
  const addMovie = (movie) => {
    moviedata.push(movie);
  };
  return (
    <div
      className="home"
      style={{ marginTop: "85px", backgroundColor: "rgba(0, 0, 0, 0.829)" }}
    >
      <Navbar />
      <Filter
        title={title}
        setTitle={setTitle}
        rating={rating}
        setRating={setRating}
      />
      <div
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <Addmovie addMovie={addMovie} />
      </div>
      <List moviedata={moviedata} title={title} rating={rating} />
      <Routes>
        <Route path="/details/:id" element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default Home;
