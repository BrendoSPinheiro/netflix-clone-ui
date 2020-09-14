import React, { useState, useEffect } from 'react';
import Tmdb from './services/Tmdb';
import './App.css';

import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

function App() {

  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);

  useEffect(() => {
    (async () => {
      let catalog = await Tmdb.getHomeCatalog();
      setMovies(catalog);

      let originals = catalog.filter(item => item.category === 'originals');
      let randomChosenMovie = Math.floor(Math.random() * (
        originals[0].items.data.results.length - 1
      ))
      let chosenMovie = originals[0].items.data.results[randomChosenMovie];
      let chosenMovieInfo = await Tmdb.getMovieInfo(chosenMovie.id, 'tv');
      setFeaturedMovie(chosenMovieInfo);
    })();

  }, []);

  return (
    <div className="page">
      {featuredMovie && 
        <FeaturedMovie item={featuredMovie}/>
      }

      <section className="list">
        {movies.map((listMovies, key) => (
          <MovieRow key={key} title={listMovies.title} items={listMovies.items}/>
        ))}
      </section>
    </div>
  );
}

export default App;