import { Link } from 'react-router-dom';
import HeaderNav from './HeaderNav';
import HeaderSearchBar from './HeaderSearchBar';
import Navbar from './Navbar';
import { LogoBlack, Burger } from '../../assets/icons';
import useResize from '../../hooks/useResize';

function Header() {
  const isMobile = useResize();

  return (
    <>
      <header className="flex h-[88px] items-center justify-between border px-4 md:px-[10%]">
        <Link to="/">
          <img src={LogoBlack} alt="logo" />
        </Link>
        {isMobile ? (
          <button className="md:hidden" type="button">
            <img src={Burger} alt="menu" />
          </button>
        ) : (
          <div className="flex flex-1">
            <HeaderSearchBar />
            <HeaderNav />
          </div>
        )}
      </header>
      {!isMobile && <Navbar />}
    </>
  );
}

export default Header;
