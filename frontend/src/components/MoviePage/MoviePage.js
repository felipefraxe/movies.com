import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchMovie } from '../../services';
import TheaterCard from '../TheaterCard/TheaterCard';

import * as S from './style';

export default function MoviePage() {
  const [movieData, setMovieData] = useState({});
  const [sessions, setSessions] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie(id)
    .then(data => {
      if(data.result) {
        setMovieData(data.result.film[0]);
        setSessions(data.result.sessions);
      } else {
        navigate('/notfound');
      }
    });
  }, [id, navigate]);

  const theaterList = sessions.reduce((acc, session) => {
    const theater = acc.find(theater => theater?.id === session.theater_id);
    if(!theater) {
      return [...acc, {
        id: session.theater_id,
        name: session.name,
        rooms: [{ number: session.number, times: [{ time: session.time, id: session.session_id }] }]
      }];
    }

    const room = theater.rooms.find(room => room.number === session.number);
    if(!room) {
      theater.rooms.push({ number: session.number, times: [{ time: session.time, id: session.session_id }] });
      return acc;
    }

    room.number === session.number
      ? room.times.push({ time:session.time, id: session.session_id })
      : room.push({ number: session.number, times: [{ time: session.time, id: session.session_id }] });
    return acc;
  }, []);

  const theaterCardsList = theaterList.map(theater => (
    <TheaterCard
      key={ theater.id }
      id={ theater.id }
      rooms={ theater.rooms }
      name={ theater.name }
    />
  ))

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
      <S.sessionsDataContainer>
        { theaterCardsList }
      </S.sessionsDataContainer>
    </>
  );
}