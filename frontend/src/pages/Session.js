import Header from '../components/Header/Header';
import SessionPage from '../components/Session/SessionPage';
import Footer from '../components/Footer/Footer';

export default function Session() {
  return (
    <>
      <Header />
      <div>
        <SessionPage />
        <Footer />
      </div>
    </>
  );
}