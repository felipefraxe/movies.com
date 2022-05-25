import React, { useState } from 'react';
import { register } from '../../services';
import * as S from './style.js';

export default function RegisterForm() {
  const [visible, setVisible] = useState('password');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    emailConfirmation: '',
    password: '',
  });

  function handleChange({ target: { name, value } }) {
    setFormData(state => ({ ...state, [name]: value }));
  }

  function handleVisibility() {
    setVisible(state => state === 'password' ? 'text' : 'password');
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { firstName, lastName, email, emailConfirmation, password } = formData;
    register(firstName, lastName, email, emailConfirmation, password)
    .then(data => console.log(data));
  }

  return (
    <>
      <S.RegisterFormContainer onSubmit={ handleSubmit }>
        <span>
          <input
            name="firstName"
            placeholder="First Name"
            autoFocus
            value={ formData.firstName }
            onChange={ handleChange }
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={ formData.lastName }
            onChange={ handleChange }
          />
        </span>
        <span>
          <input
            name="email"
            type="email"
            placeholder="E-mail"
            value={ formData.email }
            onChange={ handleChange }
          />
          <input
            name="emailConfirmation"
            type="email"
            placeholder="E-mail Confirmation"
            value={ formData.emailConfirmation }
            onChange={ handleChange }
          />
        </span>
        <div name="password-div">
          <input
            name="password"
            type={ visible }
            placeholder="Password"
            autoComplete="off"
            value={ formData.password }
            onChange={ handleChange }
          />
          {
            visible === 'text'
              ? <S.ClosedEye onClick={ handleVisibility } />
              : <S.OpenedEye onClick={ handleVisibility } />
          }
        </div>
        <div name="recommendation-div">
          <p><strong>Your password MUST have:</strong></p>
          <p>At least one upper case letter</p>
          <p>At least one number</p>
          <p>At least one special characters</p>
          <p>At least 8 characters</p>
        </div>
        <input type="submit" value="Register" />
      </S.RegisterFormContainer>
    </>
  );
}