'use client';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react';

export default function Home() {
  return (
    <main className="relative h-full w-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 9000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide1.jpg')" }}
          ></div>
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: "url('/images/slide2.jpg')" }}
          ></div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
