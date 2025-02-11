'use client';

import { usePathname } from 'next/navigation';
import { NavItems } from '../navigation/navitems';

const Footer = () => {
  const pathName = usePathname();
  const isHome = pathName === '/';
  return (
    <div
      className={` ${
        isHome ? 'bg-transparent' : 'bg-sky-200'
      } py-4 text-center text-white fixed bottom-0 w-full z-50`}
    >
      {/* <div className="container mx-auto px-4 h-full"> */}
      {/* <div className="flex justify-center items-center h-full">
          <ul className="hidden md:flex gap-x-6 text-white">
            <NavItems />
          </ul>
        </div> */}
      <div className="container mx-auto">
        <p>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
