import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { LogoBlack, Favorite, Cart, User, Burger } from '../../assets/icons';
import useResize from '../../hooks/useResize';
import { modalSlice } from '../../redux/Slice/modalSlice';
import SearchInput from '../Input/SearchInput';

function Header() {
  const isMobile = useResize();

  const dispatch = useDispatch();

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
              <button type="button" key="Favorite">
                <img src={Favorite} alt="Favorite" />
              </button>
              <button
                type="button"
                key="Cart"
                onClick={() =>
                  dispatch(
                    modalSlice.actions.openModal({
                      modalType: 'side',
                      modalProps: {
                        title: '장바구니 목록',
                        direction: 'right',
                      },
                    }),
                  )
                }
              >
                <img src={Cart} alt="Cart" />
              </button>
              <button type="button" key="User">
                <img src={User} alt="User" />
              </button>
            </nav>
          </div>
        )}
      </header>
      {!isMobile && <Navbar />}
    </>
  );
}

export default Header;
