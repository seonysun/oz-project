import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Homepage from './pages/Home/HomePage';
import Listpage from './pages/ItemList/ItemListPage';

function App() {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/list" element={<Listpage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
