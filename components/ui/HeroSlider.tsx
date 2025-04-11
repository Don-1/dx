'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { SlideType } from '../../lib/types/SlideType';
import { defaultSwiperConfig } from '../../lib/utils/swiperConfig';

interface HeroSliderProps {
  slides: SlideType[];
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides }) => {
  if (!slides.length) {
    return <p className="text-center text-gray-500">No slides available</p>;
  }

  return (
    <Swiper {...defaultSwiperConfig} className="h-full w-full">
      {slides.map((slide, index) => (
        <SwiperSlide key={`slide-${index}`}>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.backgroundImage})` }}
          ></div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
