import { useState } from 'react';
import { Search } from '../../assets/icons/index';

function SearchInput() {
  const [inputValue, setInputValue] = useState('');
  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim) return;
    setInputValue('');
  };

  return (
    <div className="mx-10 sm:grow">
      <form
        className="flex h-[40px] w-[280px] items-center gap-2 rounded-lg bg-[#F5F5F5] px-4 opacity-0 sm:opacity-100 md:h-[56px]"
        onSubmit={searchSubmit}
      >
        <button type="submit">
          <img src={Search} alt="search icon" />
        </button>
        <input
          className="w-full bg-transparent outline-none"
          placeholder="Search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}

export default SearchInput;
