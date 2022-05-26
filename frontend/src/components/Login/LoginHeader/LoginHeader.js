import { Link } from  'react-router-dom';

import * as S from './style.js';

export default function LoginHeader() {
  return (
    <S.LoginHeaderContainer>
      <Link to="/">
        <img src="/popcorn.png" alt="popcorntime logo" />
        <p>movies.com</p>
      </Link>
    </S.LoginHeaderContainer>
  );
}