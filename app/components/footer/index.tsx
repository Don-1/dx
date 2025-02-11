'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

const Footer: React.FC = () => {
  const pathName = usePathname();
  const isHome = pathName === '/';
  return (
    <div
      className={` ${
        isHome ? 'bg-transparent' : 'bg-sky-200'
      } py-4 text-center text-white fixed bottom-0 w-full z-50`}
    >
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
