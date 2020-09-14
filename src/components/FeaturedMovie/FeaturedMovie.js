import React from 'react'
import './FeaturedMovie.css';
import Button from '../Button/Button';

function FeaturedMovie({ item }){
  let firstMovieDate = new Date(item.data.first_air_date);
  let genres = [];
  item.data.genres.forEach(genre => {
    genres.push(genre.name);
  });

  return (
    <section className="featured" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(
        https://image.tmdb.org/t/p/original${item.data.backdrop_path}
      )`
    }}>
      <div className="featured-vertical">
        <div className="featured-horizontal">
          <div className="featured-name">{item.data.original_name}</div>
          <div className="featured-info">

            <div className="featured-points">
              {item.data.vote_average} pontos
            </div>
            <div className="featured-year">{firstMovieDate.getFullYear()}</div>
            <div className="featured-seasons">
              {item.data.number_of_seasons} temporada{
                item.data.number_of_seasons !== 1 ? 's' : ''
              }
            </div>
            <div className="featured-description">{item.data.overview}</div>
            <div className="featured-buttons">
              <Button 
                href={`/watch/${item.data.id}`} 
                content='► Assistir'
                style={{backgroundColor: '#FFF', color: '#000'}}
              />
              <Button 
                href={`/list/add/${item.data.id}`} 
                content='+ Minha Lista'
                style={{backgroundColor: '#333', color: '#FFF'}}
              />
            </div>
            <div className="featured-genres">
              <strong>Gêneros:</strong> {genres.join(', ')}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;