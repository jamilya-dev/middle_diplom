import Swiper from 'swiper/bundle';

const block = document.querySelectorAll('.service-block');

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

  const serviceSwiper = new Swiper('.serviceSwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: '.services__arrow--right',
      prevEl: '.services__arrow--left',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  const updateBlockStyles = () => {
    const windiwWidth = document.documentElement.clientWidth;
    block.forEach((item) => {
      const blockText = item.querySelector('.service-text');
      const blockImg = item.querySelector('.service-image');
      if (windiwWidth < 992 && windiwWidth > 576) {
        item.style.display = 'flex';
        item.style.flexDirection = 'column';
        item.style.margin = '0';
        blockText.style.marginLeft = '0';
        blockText.style.borderTopRightRadius = '0';
        blockText.style.borderBottomLeftRadius = '10px';
        blockImg.style.position = 'relative';
        blockImg.style.width = '100%';
        blockImg.querySelector('img').style.width = '100%';
        blockImg.querySelector('img').style.height = '100%';
        blockImg.querySelector('img').style.objectFit = 'cover';
        blockImg.querySelector('img').style.borderBottomLeftRadius = '0';
        blockImg.querySelector('img').style.borderTopRightRadius = '10px';
      }
    });
  };

  window.addEventListener('resize', updateBlockStyles);
  updateBlockStyles();
};
export default carousel;
