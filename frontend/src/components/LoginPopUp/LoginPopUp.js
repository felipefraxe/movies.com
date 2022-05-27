import { Link } from 'react-router-dom';

import * as S from './style.js';

export default function LoginPopUp() {

  return (
    <S.popUp>
      <div name="register-half">
        <p><strong>Still don't have an account ?</strong></p>
        <p>Buy tickets and popcorn combos safely and comfortably</p>
        <Link to="/register"><button type="button">SIGN UP</button></Link>
      </div>
      <div name="login-half">
        <p><strong>Movies.com Client</strong></p>
        <Link to="/login">Log in to my account</Link>
      </div>
    </S.popUp>
  );
}