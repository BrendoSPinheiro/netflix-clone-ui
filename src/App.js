import React, { useState, useEffect } from 'react';
import Tmdb from './services/Tmdb';
import './App.css';

import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {

  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);

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

  useEffect(() => {
    const scrollListener = () => {
      window.scrollY > 10 ? setBlackHeader(true) : setBlackHeader(false);
    }

    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="page">

      <Header black={blackHeader}/>

      {featuredMovie && 
        <FeaturedMovie item={featuredMovie}/>
      }

      <section className="list">
        {movies.map((listMovies, key) => (
          <MovieRow key={key} title={listMovies.title} items={listMovies.items}/>
        ))}
      </section>
      <Footer/>
      
      {movies.length <= 0 &&
        <div className="loading">
          <img 
            src="https://www.filmelier.com/pt/br/news/wp-content/uploads/2020/03/netflix-loading.gif" 
            alt="Carregando"
          />
        </div>
      }

    </div>
  );
}

export default App;