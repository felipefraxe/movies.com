import React from 'react';
import LoginHeader from '../components/Login/LoginHeader/LoginHeader';
import LoginForm from '../components/Login/LoginForm/LoginForm';
import Footer from '../components/Footer/Footer';

export default function Login() {
  return (
    <>
      <LoginHeader />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <LoginForm />
        <Footer />
      </div>
    </>
  );
}