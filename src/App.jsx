import { Route, Routes } from 'react-router-dom';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Homepage from './pages/HomePage';
import Listpage from './pages/ItemListPage';

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
