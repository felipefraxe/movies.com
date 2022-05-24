import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import { fetchMovies } from '../services';
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

  const movies = moviesArr.map(movie => <li key={ movie.id }>{ movie.title }</li>);

  return (
    <>
      <Header name={ name } />
      <ul>
        { movies }
      </ul>
      <Footer />
    </>
  );
}