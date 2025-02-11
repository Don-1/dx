'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './Button';

export const Logo: React.FC = () => {
  const [width, setWidth] = useState(0);
  const [showButton, setShowButton] = useState(false);

  const updateWidth = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  const changeNavButton = () => {
    if (window.scrollY >= 400 && window.innerWidth < 768) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidth);
    updateWidth();
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', changeNavButton);
  }, []);
  return (
    <>
      <Link href={'/'} style={{ display: showButton ? 'none' : 'block' }}>
        <Image
          src={'/images/logo.png'}
          alt='Logo'
          width={width < 1024 ? '80' : '100'}
          height={width < 1024 ? '40' : '34'}
          className="relative"
        />
      </Link>
      <div style={{ display: showButton ? 'block' : 'none' }}>
        <Button />
      </div>
    </>
  );
};
