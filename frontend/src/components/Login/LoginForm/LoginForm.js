import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../../services';
import ErrorAlert from '../../Alert/ErrorAlert';

import * as S from './style';

export default function LoginForm() {
  const [visible, setVisible] = useState('password');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const disabled = !passwordRegex.test(formData.password) || formData.password.length < 8 || !regexEmail.test(formData.email);

  const navigate = useNavigate();

  function handleChange({ target: { name, value } }) {
    setFormData(state => ({ ...state, [name]: value }));
  }

  function handleVisibility() {
    setVisible(state => state === 'password' ? 'text' : 'password');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) {
      setError('Invalid email and/or password');
      return;
    }

    setFormData({ email: '', password: '' });

    login(formData.email, formData.password)
    .then(data => {
      if(data.token) {
        localStorage.setItem('token', data.token);
        navigate('/');
      } else {
        setError(data.error);
      }
    });
  }
  
  return (
    <>
      { error && <ErrorAlert error={ error } setError={ setError } /> }
      <S.LoginFormContainer onSubmit={ handleSubmit }>
        <input
          name="email"
          type="email"
          placeholder="Type your e-mail"
          autoFocus
          required
          value={ formData.email }
          onChange={ handleChange }
        />
        <div>
          <input
            type={ visible }
            name="password"
            placeholder="Password"
            autoComplete="off"
            required
            value={ formData.password }
            onChange={ handleChange }
          />
          {
            visible === 'text'
            ? <S.ClosedEye onClick={ handleVisibility } />
            : <S.OpenedEye onClick={ handleVisibility } />
          }
        </div>
        <input type="submit" value="Login" />
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </S.LoginFormContainer>
    </>
  );
}