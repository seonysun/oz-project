import React from 'react';
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
      <div className="flex h-[48px] items-center justify-between bg-[#2E2E2E] text-sm text-white md:px-[80px] lg:px-[160px]">
        {navList.map((nav, idx) => (
          <React.Fragment key={nav.name}>
            {idx > 0 && <span>|</span>}
            <Link to="/" className="flex items-center gap-1">
              <img src={nav.src} alt={nav.name} className="size-6" />
              <span>{nav.name}</span>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
