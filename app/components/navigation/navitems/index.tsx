import Link from 'next/link';
import React from 'react';

type NavItem = {
  route: string;
  href: string;
};

const NavItemList: NavItem[] = [
  { route: 'Home', href: '/' },
  { route: 'Snaps', href: '/blog' },
  { route: 'Calendar', href: '/calendar' },
  { route: 'About Me', href: '/about' },
  { route: 'Contact Me', href: '/contacts' },
];

export const NavItems: React.FC<{ toggel?: () => void }> = ({ toggel }) => {
  return NavItemList.map((item, index) => (
    <li key={index}>
      <Link href={item.href} onClick={toggel}>
        <p>{item.route}</p>
      </Link>
    </li>
  ));
};
