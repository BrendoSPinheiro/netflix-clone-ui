import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function MovieRow({ title, items }) {

  const [scrollX, setScrollX] = useState(0);

  function handleArrowLeft(){
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }

    setScrollX(x);
  }

  function handleArrowRight(){
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listWidth = items.data.results.length * 150;
    if((window.innerWidth - listWidth) > x){
      x = (window.innerWidth - listWidth) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow-ArrowLeft" onClick={handleArrowLeft}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="movieRow-ArrowRight" onClick={handleArrowRight}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>

      <div className="movieRow-listArea">
        <div className="movieRow-listItems" style={{
          marginLeft: scrollX,
          width: items.data.results.length * 150
        }}>
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