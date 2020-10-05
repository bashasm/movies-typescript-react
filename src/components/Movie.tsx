import React from "react";
import { IMovie } from "../interfaces/interface";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";

function setVoteClass(average: number) {
  if (average >= 8) {
    return "green";
  } else if (average >= 6) {
    return "orange";
  } else {
    return "red";
  }
}

function Movie({ movie }: { movie: IMovie }) {
  const path = movie.poster_path
    ? `${IMGPATH}${movie.poster_path}`
    : "https://images.unsplash.com/photo-1532003885409-ed84d334f6cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

  return (
    <div className="movie">
      <img src={path} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <span className={`tag ${setVoteClass(movie.vote_average)}`}>
          {movie.vote_average}
        </span>
      </div>
      <div className="movie-over">
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Movie;
