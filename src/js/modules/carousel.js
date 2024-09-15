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
      577: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

  const serviceSwiper = new Swiper('.serviceSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.services__arrow--right',
      prevEl: '.services__arrow--left',
    },
    breakpoints: {
      577: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
};
export default carousel;
