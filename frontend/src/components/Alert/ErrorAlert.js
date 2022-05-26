import * as S from './style.js';

export default function ErrorAlert({ error, setError }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <S.ErrorAlertContainer>
        <p>{ error }</p>
        <S.CloseButton onClick={ () => setError('') } />
      </S.ErrorAlertContainer>
    </div>
  );
}