import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovie } from '../../services';
import TheaterCard from '../TheaterCard/TheaterCard';

import * as S from './style';

export default function MoviePage() {
  const [movieData, setMovieData] = useState({});
  const [theaters, setTheaters] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(id)
    .then(data => {
      if(data.result) {
        setMovieData(data.result.film[0]);
        setTheaters(data.result.theaters);
      } else {
        navigate('/notfound');
      }
    });
  }, [id, navigate]);

  const theatersList = theaters.map(theater => (
    <TheaterCard
      key={ theater.id }
      id={ theater.id }
      name={ theater.name }
    />
  ));

  const genreList = movieData.genre?.slice(0, 3)
    .map((item, key) => <p key={ key }>{ item }</p>);

  return (
    <>
      <S.movieDataContainer>
        <img src={ movieData.image_path } alt={ `${movieData.title} poster` } />
        <div>
          <h3>{ `${movieData.title} (${movieData.year})` }</h3>
          <S.genreContainer>{ genreList }</S.genreContainer>
          <S.otherDataContainer>
            <a href="https://www.imdb.com" target="_blank" rel="noreferrer">
              <img src="/imdb.png" alt="imdb logo" />
              <p>{ movieData.rating }/10</p>
            </a>
            <p>{ movieData.mpaa }</p>
            <p>{ `${movieData.duration} min.` }</p>
          </S.otherDataContainer>
        </div>
      </S.movieDataContainer>
      <S.theaterDataContainer>
        { theatersList }
      </S.theaterDataContainer>
    </>
  );
}