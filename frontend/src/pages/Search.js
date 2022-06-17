import Header from '../components/Header/Header';
import SearchPage from '../components/Search/SearchPage';
import Footer from '../components/Footer/Footer';

export default function Search() {
  return (
    <>
      <Header />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '82vh' }}>
        <SearchPage />
        <Footer />
      </div>
    </>
  );
}