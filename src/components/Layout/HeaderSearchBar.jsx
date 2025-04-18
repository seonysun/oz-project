import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import SearchInput from '../Input/SearchInput';

function HeaderSearchBar() {
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
    <div className="mx-10 flex-1">
      <SearchInput
        size="h-[56px] max-w-[330px]"
        value={inputValue}
        onSubmit={handleSubmit}
        onChange={setInputValue}
      />
    </div>
  );
}

export default HeaderSearchBar;
