const scroll = () => {
  let scrollBtn = document.querySelector('.smooth-scroll');

  scrollBtn.style.display = 'none';

  window.addEventListener('scroll', () => {
    const scrollHide = document.documentElement.scrollTop; // 674
    if (scrollHide > 674) {
      scrollBtn.style.display = 'block';
    } else {
      scrollBtn.style.display = 'none';
    }
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
};
export default scroll;
