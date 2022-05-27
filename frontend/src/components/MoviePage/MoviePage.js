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
  }, [id]);

  return (
    <>
      <S.movieDataContainer>
        <img src={ movieData.image_path } alt={ `${movieData.title} poster` } />
        <div>
          <p>{ `${movieData.title} (${movieData.year})` }</p>
        </div>
      </S.movieDataContainer>
    </>
  );
}