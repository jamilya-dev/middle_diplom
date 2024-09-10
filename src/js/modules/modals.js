const modals = () => {
  const modalBtn = document.querySelector('.button');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const modalClose = document.querySelector('.header-modal__close');

  const serviceBtns = document.querySelectorAll('.service-button > a.fancyboxModal');
  const servicesModal = document.querySelector('.services-modal');
  const servicesModalClose = document.querySelector('.services-modal__close');

  console.log(serviceBtns);
  modalBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    headerModal.style.display = 'block';
  });

  modalClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    headerModal.style.display = 'none';
  });

  serviceBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target);
      if (e.target.closest('.btn-success')) {
        overlay.style.display = 'block';
        servicesModal.style.display = 'block';
      }
    });
  });

  servicesModalClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    servicesModal.style.display = 'none';
  });
};
export default modals;
