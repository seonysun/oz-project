import Navbar from './Navbar';

function Header() {
  return (
    <>
      <div className="flex h-[64px] items-center justify-between border px-4 md:h-[88px] md:px-[80px] lg:px-[160px]">
        <div>logo</div>
        <div className="sm:hidden">burger</div>
        <div className="hidden sm:block">searchbar</div>
        <div className="hidden sm:block">icons</div>
      </div>
      <Navbar />
    </>
  );
}

export default Header;
