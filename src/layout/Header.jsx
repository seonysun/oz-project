import Navbar from './Navbar';
import SearchInput from '../components/Input/SearchInput';

function Header() {
  return (
    <>
      <header className="flex h-[64px] items-center justify-between border px-4 md:h-[88px] md:px-[80px] lg:px-[160px]">
        <div>logo</div>
        <SearchInput />
        <div className="sm:hidden">burger</div>
        <div className="hidden sm:block">icons</div>
      </header>
      <Navbar />
    </>
  );
}

export default Header;
