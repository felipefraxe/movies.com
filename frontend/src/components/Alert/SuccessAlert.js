import React from 'react';

import * as S from './style.js';

export default function SuccessAlert({ message, setMessage }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <S.SuccessAlertContainer>
        <p>{ message }</p>
        <S.CloseButton onClick={ () => setMessage('') } />
      </S.SuccessAlertContainer>
    </div>
  );
}