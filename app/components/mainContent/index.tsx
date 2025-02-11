'use client';

import { usePathname } from 'next/navigation';
import React from 'react';

export const MainContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <main className={`${isHome ? '' : 'pt-20'} flex-grow`}>{children}</main>
  );
};
