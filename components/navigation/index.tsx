'use client';

import React, { useState } from 'react';

import Navbar from './navbar';
import Sidebar from './sidebar';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
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
