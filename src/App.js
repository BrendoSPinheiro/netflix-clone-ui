import React, { useState, useEffect } from 'react';
import Tmdb from './services/Tmdb';

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      let list = await Tmdb.getHomeCatalog();
      setMovies(list);
    })();
  }, []);

  return (
    <h1>Teste</h1>
  );
}

export default App;