import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import Navbar from './Navbar';
import { LogoBlack, Cart, User, Burger } from '../../assets/icons';
import useResize from '../../hooks/useResize';
import { modalSlice } from '../../redux/Slice/modalSlice';
import SearchInput from '../Input/SearchInput';

function Header() {
  const isMobile = useResize();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const [, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (!inputValue.trim()) return;

    if (location.pathname === '/search')
      setSearchParam({ input: inputValue.trim() });
    else navigate(`/search?input=${inputValue.trim()}`);
  }, [inputValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/search?input=${inputValue}`);
    setInputValue('');
  };

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
              <SearchInput
                size="h-[56px] max-w-[330px]"
                value={inputValue}
                onSubmit={handleSubmit}
                onChange={setInputValue}
              />
            </div>
            <nav className="flex gap-4">
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
              <button
                type="button"
                key="User"
                onClick={() => navigate('/user')}
              >
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
