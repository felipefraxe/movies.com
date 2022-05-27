import Header from '../components/Header/Header';
import MoviePage from '../components/MoviePage/MoviePage';
import Footer from '../components/Footer/Footer';

export default function Movie() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '82.2vh' }}>
        <MoviePage />
        <Footer />
      </div>
    </>
  );
}