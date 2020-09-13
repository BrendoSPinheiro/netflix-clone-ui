import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

const API_KEY = '8c9a56374f51fbea4b3472106990ac9d';


const apiFetch = async (endpoint) => {
  const req = await api.get(endpoint);
  return req;
}

export default {
  getHomeCatalog: async () => {
    return [
      {
        category: 'originals',
        title: 'Originais da Netflix',
        items: await apiFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        category: 'trending',
        title: 'Recomendados para Você',
        items: await apiFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}
        `),
      },
      {
        category: 'toprated',
        title: 'Em Alta',
        items: await apiFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}
        `),
      },
      {
        category: 'action',
        title: 'Ação',
        items: await apiFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}
        `),
      },
      {
        category: 'comedy',
        title: 'Comédia',
        items: await apiFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}
        `),  
      },
      {
        category: 'horror',
        title: 'Terror',
        items: await apiFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}
        `),
      },
      {
        category: 'romance',
        title: 'Romance',
        items: await apiFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}
        `),
      },
      {
        category: 'documentary',
        title: 'Documentários',
        items: await apiFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}
        `),
      },
    ];
  }
};