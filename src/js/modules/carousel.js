import Swiper from 'swiper/bundle';

export const carousel = () => {
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.benefits__arrow--right',
      prevEl: '.benefits__arrow--left',
    },
    breakpoints: {
      576: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
};
export default carousel;
