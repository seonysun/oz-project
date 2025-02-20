import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { LogoBlack, Favorite, Cart, User, Burger } from '../assets/icons';
import SearchInput from '../components/Input/SearchInput';

function Header() {
  const userIcons = [
    { src: Favorite, alt: 'Favorite' },
    { src: Cart, alt: 'Cart' },
    { src: User, alt: 'User' },
  ];

  return (
    <>
      <header className="flex h-[64px] items-center justify-between border px-4 sm:h-[88px] sm:px-[10%]">
        <Link to="/">
          <img src={LogoBlack} alt="logo" />
        </Link>
        <SearchInput />
        <button className="sm:hidden" type="button">
          <img src={Burger} alt="menu" />
        </button>
        <nav className="hidden sm:block">
          <div className="flex gap-4">
            {userIcons.map((icon) => (
              <img key={icon.alt} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </nav>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
