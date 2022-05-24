import React from 'react';
import * as S from './style.js';

export default function Footer() {
  return (
    <S.FooterContainer>
      <hr />
      <p>Created and developed by Felipe Fraxe, software developer student</p>
      <a href="https://www.github.com/felipefraxe" target="_blank" rel="noreferrer">
        <img src="github.png" alt="GitHub Logo" />
      </a>
      <a href="https://www.linkedin.com/in/felipefraxe" target="_blank" rel="noreferrer">
        <img src="linkedin.png" alt="Linkedin Logo" />
      </a>
    </S.FooterContainer>
  );
}