import React from 'react';

export const Swiper = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-swiper">{children}</div>
);

export const SwiperSlide = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="mock-swiper-slide">{children}</div>
);

export default { Swiper, SwiperSlide };
