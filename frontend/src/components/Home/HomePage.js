import { useState, useEffect } from 'react';
import { fetchMovies } from '../../services';
import MovieCard from '../MovieCard/MovieCard';

import * as S from './style.js';

export default function HomePage() {
  const [moviesArr, setMoviesArr] = useState([]);

  useEffect(() => {
    fetchMovies()
    .then(data => {
      data.result && setMoviesArr(data.result);
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
      <S.homePageContainer>
        { movies }
      </S.homePageContainer>
    </>
  );
}