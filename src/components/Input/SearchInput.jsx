import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { Search } from '../../assets/icons';

function SearchInput({ size, message = 'Search' }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [inputValue, setInputValue] = useState('');
  const [, setSearchParam] = useSearchParams();

  useEffect(() => {
    if (!inputValue.trim()) return;

    if (location.pathname === '/search')
      setSearchParam({ input: inputValue.trim() });
    else navigate(`/search?input=${inputValue}`);
  }, [inputValue]);

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    navigate(`/search?input=${inputValue}`);
    setInputValue('');
  };

  return (
    <form
      className={`flex w-full ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={searchSubmit}
    >
      <button type="submit">
        <img src={Search} alt="search icon" />
      </button>
      <input
        className="w-full bg-transparent outline-none"
        placeholder={message}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
