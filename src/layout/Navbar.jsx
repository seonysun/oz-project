import { Link } from 'react-router-dom';
import {
  Phones,
  Computers,
  SmartWatches,
  Cameras,
  Headphones,
  Gaming,
} from '../assets/icons/index';

function Nav() {
  const navList = [
    { name: 'Phones', src: Phones },
    { name: 'Computers', src: Computers },
    { name: 'Smart Watches', src: SmartWatches },
    { name: 'Cameras', src: Cameras },
    { name: 'Headphones', src: Headphones },
    { name: 'Gaming', src: Gaming },
  ];

  return (
    <nav className="hidden md:block">
      <div className="flex h-[48px] justify-between bg-[#2E2E2E] px-4 md:px-[80px] lg:px-[160px]">
        {navList.map((nav) => (
          <Link key={nav.name} to="/" className="flex items-center gap-2">
            <img src={nav.src} alt={nav.name} className="size-6" />
            <span className="text-sm text-white">{nav.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
