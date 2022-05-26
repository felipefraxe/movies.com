import Header from '../components/Header/Header';
import HomePage from '../components/Home/HomePage';
import Footer from '../components/Footer/Footer';

export default function Home() {
  return (
    <>
      <Header name='Guest' />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '82.9vh' }}>
        <HomePage />
        <Footer />
      </div>
    </>
  );
}