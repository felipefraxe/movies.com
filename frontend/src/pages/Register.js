import LoginHeader from '../components/Login/LoginHeader/LoginHeader';
import RegisterForm from '../components/Register/RegisterForm';
import Footer from '../components/Footer/Footer';

export default function Register() {
  return (
    <>
      <LoginHeader />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '65vh' }}>
        <RegisterForm />
        <Footer />
      </div>
    </>
  );
}