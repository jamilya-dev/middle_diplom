const modals = () => {
  const modalBtn = document.querySelector('.button');
  const headerModal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');
  const modalClose = document.querySelector('.header-modal__close');

  modalBtn.addEventListener('click', () => {
    overlay.style.display = 'block';
    headerModal.style.display = 'block';
  });

  modalClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    headerModal.style.display = 'none';
  });
};
export default modals;
