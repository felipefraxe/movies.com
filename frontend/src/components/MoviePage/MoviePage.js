import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from '../../services';

import * as S from './style';

export default function MoviePage() {
  const [movieData, setMovieData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetchMovie(id)
    .then(data => setMovieData(data.result[0]));
  }, []);

  return (
    <>
      <img src={ movieData.image_path } alt={ `${movieData.title} poster` } />
      <p>{ movieData.title }</p>
      <p>{ movieData.year }</p>
    </>
  );
}