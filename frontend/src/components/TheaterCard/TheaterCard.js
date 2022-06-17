import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './style.js';

export default function TheaterCard({ id, name, rooms,  }) {
  const [favorites, setFavorites] = useState(false);

  function handleFavorite() {
    setFavorites(state => !state);
  }

  const roomsList = rooms.map(room => (
    <div key={ room.number }>
      <p><strong>{ `Room ${room.number}` }</strong></p>
      <S.timeContainer>
        { room.times.map((time) => (
          <Link key={ time.id } to={ `/sessions/${time.id}` }>
            <p><strong>{ time.time }</strong></p>
          </Link>
        )) }
      </S.timeContainer>
    </div>
  ));

  return (
    <>
      <S.theaterCardContainer>
        <span>{ favorites ? <S.heartFill onClick={ handleFavorite } /> : <S.heartVoid onClick={ handleFavorite } /> }<h6>{ name }</h6></span>
        <hr />
        { roomsList }
      </S.theaterCardContainer>
    </>
  );
}