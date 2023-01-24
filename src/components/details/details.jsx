import React from "react";
import "./details.css";
import { moviedata } from "../movies/moviesdata";
import { useParams, useNavigate } from "react-router-dom";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const movie = moviedata.find((el) => el.id == id);
  const onClick = () => navigate("/");
  console.log(movie);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        height: "800px",
        width: "600px",
        alignItems: "flex-start",
        marginLeft: " 25%",
        marginTop: "40px",
      }}
    >
      <iframe
        src={movie.trailer}
        frameborder="0"
        style={{ width: 600, height: 315 }}
      ></iframe>
      <h2>{movie.description}</h2>
      <button className="btn btn-primary" onClick={onClick}>
        go back
      </button>
    </div>
  );
};

export default Details;
