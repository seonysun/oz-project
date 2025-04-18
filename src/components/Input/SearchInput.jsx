import { Search } from '../../assets/icons';

function SearchInput({ size, message = 'Search', value, onChange, onSubmit }) {
  return (
    <form
      className={`flex w-full ${size} items-center gap-2 rounded-lg bg-[#F5F5F5] p-3`}
      onSubmit={onSubmit}
    >
      <button type="submit">
        <img src={Search} alt="search icon" />
      </button>
      <input
        className="w-full bg-transparent outline-none"
        placeholder={message}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
