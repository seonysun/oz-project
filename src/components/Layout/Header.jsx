import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { LogoBlack, Favorite, Cart, User, Burger } from '../../assets/icons';
import SearchInput from '../Input/SearchInput';

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
        <div className="sm:mx-10 sm:grow">
          <SearchInput size="h-[56px] max-w-[310px]" />
        </div>
        <button className="sm:hidden" type="button">
          <img src={Burger} alt="menu" />
        </button>
        <nav className="hidden sm:block">
          <div className="flex gap-4">
            {userIcons.map((icon) => (
              <button type="button" key={icon.alt}>
                <img src={icon.src} alt={icon.alt} />
              </button>
            ))}
          </div>
        </nav>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
