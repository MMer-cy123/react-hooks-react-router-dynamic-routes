import React from "react";

function MoviesList({ movies }) {
  return (
    <div>
      <h2>Movies List</h2>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MoviesList;
