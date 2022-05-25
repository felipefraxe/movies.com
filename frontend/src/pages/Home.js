import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { fetchMovies } from '../services';
import MovieCard from '../components/MovieCard/MovieCard';
import Footer from '../components/Footer/Footer';

export default function Home() {
  const [moviesArr, setMoviesArr] = useState([]);
  const [name, setName] = useState('Guest');

  useEffect(() => {
    fetchMovies()
    .then(data => {
      data.result && setMoviesArr(data.result);
      data.name && setName(data.name);
    })
  }, []);

  const movies = moviesArr.map(movie => (
    <MovieCard
      key={ movie.id }
      id={ movie.id }
      title={ movie.title }
      image_path={ movie.image_path }
    />
  ));

  return (
    <>
      <Header name={ name } />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
          { movies }
        </div>
        <Footer />
      </div>
    </>
  );
}