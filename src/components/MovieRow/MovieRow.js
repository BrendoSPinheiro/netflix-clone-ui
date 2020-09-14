import React from 'react';
import './MovieRow.css';

function MovieRow({ title, items }) {
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow-listArea">
        <div className="movieRow-listItems">
          {items.data.results.length > 0 &&
            items.data.results.map((movie, key) => (
              <div key={key} className="movieRow-item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MovieRow;