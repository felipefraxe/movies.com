import { useState } from 'react';

import * as S from './style.js';

export default function TheaterCard({ name, id }) {
  const [favorites, setFavorites] = useState(false);

  function handleFavorite() {
    setFavorites(state => !state);
  }

  return (
    <>
      <S.theaterCardContainer>
        <span>{ favorites ? <S.heartFill onClick={ handleFavorite } /> : <S.heartVoid onClick={ handleFavorite } /> }<h6>{ name }</h6></span>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <p>Quisque eget aliquet orci, vulputate semper orci.</p>
        <p>Vivamus consectetur dui at sem tincidunt tincidunt.</p>
        <p>Curabitur vitae magna mattis, iaculis justo non, pretium eros.</p>
        <p>Maecenas imperdiet tempor eros nec suscipit.</p>
      </S.theaterCardContainer>
    </>
  );
}