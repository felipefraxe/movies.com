import React from 'react';
import { Link } from 'react-router-dom';
import { BsSearch, BsQuestionCircle } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { AiOutlineUser } from 'react-icons/ai';

import * as S from './style.js';

export default function Header({ name }) {
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
          <p><AiOutlineUser /> Hello, { name }</p>
          <p><BsQuestionCircle /> Help</p>
        </aside>
      </S.mainNavContainer>
      <S.supportNavContainer>
        <Link to="/">Movies</Link>
        <Link to="/">Movie Theaters</Link>
        <Link to="/">News</Link>
        <Link to="/">Fan Store</Link>
      </S.supportNavContainer>
    </>
  );
}