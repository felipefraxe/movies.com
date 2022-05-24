import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';
import LoginPopUp from '../LoginPopUp/LoginPopUp.js';

import * as S from './style.js';

export default function Header({ name }) {
  const [LoginPopUpShow, setLoginPopUpShow] = useState(false);

  return (
    <>
      <S.mainNavContainer>
        <Link to="/">
          <img src="popcorn.png" alt="Popcorn time logo" />
          <p>movies.com</p>
        </Link>
        <aside>
          <p><BsSearch /> Search</p>
          <p><HiOutlineLocationMarker /> Location</p>
          <p onClick={ () => setLoginPopUpShow(state => !state) }><AiOutlineUser /> Hello, { name }</p>
          <p><BsQuestionCircle /> Help</p>
        </aside>
      </S.mainNavContainer>
      { LoginPopUpShow && name === 'Guest' && <LoginPopUp /> }
      <S.supportNavContainer>
        <Link to="/">Movies</Link>
        <Link to="/">Movie Theaters</Link>
        <Link to="/">News</Link>
        <Link to="/">Fan Store</Link>
      </S.supportNavContainer>
    </>
  );
}