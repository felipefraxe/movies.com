import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import LoginPopUp from '../LoginPopUp/LoginPopUp.js';

import * as S from './style.js';

export default function Header() {
  const [LoginPopUpShow, setLoginPopUpShow] = useState(false);
  const { username } = useSelector(store => store.userData);

  return (
    <>
      <S.mainNavContainer>
        <Link to="/">
          <img src="/popcorn.png" alt="Popcorn time logo" />
          <p>movies.com</p>
        </Link>
        <aside>
          <p><BsSearch /><Link to="/search">Search</Link></p>
          <p><HiOutlineLocationMarker /> Location</p>
          <p onClick={ () => setLoginPopUpShow(state => !state) }><AiOutlineUser /> Hello, { username }</p>
          <p><BsQuestionCircle /> Help</p>
        </aside>
      </S.mainNavContainer>
      { LoginPopUpShow && username === 'Guest' && <LoginPopUp /> }
      <S.supportNavContainer>
        <Link to="/">Movies</Link>
        <Link to="/">Theaters</Link>
        <Link to="/">News</Link>
        <Link to="/">Fan Store</Link>
      </S.supportNavContainer>
    </>
  );
}