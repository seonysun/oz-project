import { Outlet } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';

function App() {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
