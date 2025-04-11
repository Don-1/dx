'use client';

import React from 'react';
import { HeroSlider } from '../components/ui/HeroSlider';
import { SlideType } from '../lib/types/SlideType';

export default function Home() {
  const slides: SlideType[] = [
    { backgroundImage: '/images/slide1.jpg' },
    { backgroundImage: '/images/slide2.jpg' },
  ];
  return (
    <main className="relative h-full w-screen overflow-hidden">
      <HeroSlider slides={slides} />
    </main>
  );
}
