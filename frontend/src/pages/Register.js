import React from 'react';
import LoginHeader from '../components/Login/LoginHeader/LoginHeader';
import RegisterForm from '../components/Register/RegisterForm';
import Footer from '../components/Footer/Footer';

export default function Register() {
  return (
    <>
      <LoginHeader />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <RegisterForm />
        <Footer />
      </div>
    </>
  );
}