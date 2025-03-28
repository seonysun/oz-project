import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LIST } from '../../constants/uiData';

function Nav() {
  return (
    <nav className="flex h-[48px] items-center justify-between bg-[#2E2E2E] text-sm text-white md:px-[10%]">
      {NAV_LIST.map((nav, idx) => (
        <React.Fragment key={nav.name}>
          {idx > 0 && <span>|</span>}
          <Link
            to={`/list/${nav.name.toLowerCase()}`}
            className="flex items-center gap-1"
          >
            <img src={nav.src} alt={nav.name} className="size-6" />
            <span>{nav.name}</span>
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

export default Nav;
