import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const defaultSwiperConfig = {
  modules: [Autoplay, EffectFade, Navigation, Pagination],
  speed: 1000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
};
