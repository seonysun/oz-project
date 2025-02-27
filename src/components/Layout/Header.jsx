import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { LogoBlack, Favorite, Cart, User, Burger } from '../../assets/icons';
import useResize from '../../hooks/useResize';
import SearchInput from '../Input/SearchInput';

const USER_ICONS = [
  { src: Favorite, alt: 'Favorite' },
  { src: Cart, alt: 'Cart' },
  { src: User, alt: 'User' },
];

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
            <div className="mx-10 flex-1">
              <SearchInput size="h-[56px] max-w-[330px]" />
            </div>
            <nav className="flex gap-4">
              {USER_ICONS.map((icon) => (
                <button type="button" key={icon.alt}>
                  <img src={icon.src} alt={icon.alt} />
                </button>
              ))}
            </nav>
          </div>
        )}
      </header>
      {!isMobile && <Navbar />}
    </>
  );
}

export default Header;
