import { usePathname } from 'next/navigation';
import React from 'react';

import { NavItems } from '../navitems';
import { Logo } from './Logo';

const Navbar: React.FC<{ toggle: () => void }> = ({ toggle }) => {
  const pathName = usePathname();
  const isHome = pathName === '/';

  return (
    <div
      className={`w-full h-20 ${
        isHome ? 'bg-transparent' : 'bg-slate-200'
      } fixed top-0 left-0 z-50 p-4`}
    >
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <button type="button" className="inline-flex items-center md:hidden" onClick={toggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path
                fill={`${isHome ? '#fff' : 'text-[#999]'}`}
                d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
              />
            </svg>
          </button>
          <ul className={`hidden md:flex gap-x-6 ${isHome ? 'text-white' : 'text-[#999]'}`}>
            <NavItems />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
