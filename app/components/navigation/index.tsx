'use client';

import React, { useState } from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    console.log('Toggling');
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
};

export default Navigation;
