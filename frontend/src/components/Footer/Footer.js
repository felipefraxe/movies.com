import * as S from './style.js';

export default function Footer() {
  return (
    <>
      <hr style={{ width: '70%', margin: 'auto auto 0 auto' }}/>
      <S.FooterContainer>
        <p>Created and developed by Felipe Fraxe, software developer student</p>
        <div>
          <a href="https://www.github.com/felipefraxe" target="_blank" rel="noreferrer">
            <img src="/github.png" alt="GitHub Logo" />
          </a>
          <a href="https://www.linkedin.com/in/felipefraxe" target="_blank" rel="noreferrer">
            <img src="/linkedin.png" alt="Linkedin Logo" />
          </a>
        </div>
      </S.FooterContainer>
    </>
  );
}