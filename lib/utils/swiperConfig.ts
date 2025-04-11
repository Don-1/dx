import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export const defaultSwiperConfig = {
  modules: [Autoplay, EffectFade, Navigation, Pagination],
  effect: "fade",
  speed: 1000,
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
};
