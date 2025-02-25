import { useState } from 'react';
import { Search } from '../../assets/icons';

function SearchInput({ size }) {
  const [inputValue, setInputValue] = useState('');

  const searchSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    setInputValue('');
  };

  return (
    <form
      className={`flex ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] px-4 opacity-0 sm:opacity-100`}
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
  );
}

export default SearchInput;
