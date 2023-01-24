import React from "react";
import "./list.css";
import ListItem from "./ListItem";
import { useRef } from "react";
import { Link } from "react-router-dom";
const List = ({ moviedata, title, rating }) => {
  const listRef = useRef();

  return (
    <div className="list">
      <div className="wrapper">
        <div className="container" ref={listRef}>
          {moviedata
            .filter(
              (movie) =>
                movie.name.toLowerCase().includes(title.toLowerCase().trim()) &&
                movie.rating === rating
            )
            .map((movie) => (
              <ListItem key={movie.id} movie={movie} index={movie.id - 1} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default List;
