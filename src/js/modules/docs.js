const docs = () => {
  const docs = document.querySelectorAll('.sertificate-document');
  const docsImgs = document.querySelectorAll('.sertificate-document > img.img-responsive');
  const overlay = document.querySelector('.overlay');
  const documentOverlay = document.querySelectorAll('.document-overlay');

  const modal = document.createElement('div');
  modal.classList.add('docs-modal');
  modal.style.cssText = 'display: none; position: fixed; top: 0%; left: 50%; transform: translate(-50%, -50%); z-index: 9999; height: 100%; width: auto;';
  modal.innerHTML = '<img src="" alt="Modal Image" class="modal-image">';

  document.querySelector('.services-modal').after(modal);
  const modalImage = modal.querySelector('.modal-image');
  modalImage.style.cssText = 'margin: auto; display: block; width: auto; height: 100%;';

  const animate = ({ duration, timing, draw }) => {
    const start = performance.now();

    requestAnimationFrame(function animationLoop(time) {
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1;

      const progress = timing(timeFraction);
      draw(progress);

      if (timeFraction < 1) {
        requestAnimationFrame(animationLoop);
      }
    });
  };

  docs.forEach((item, index) => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const srcImg = docsImgs[index].getAttribute('src').replace('documents', 'documents/original');
      console.log(srcImg);
      modalImage.setAttribute('src', srcImg);
      modal.style.display = 'block';
      overlay.style.display = 'block';
      animate({
        duration: 500,
        timing: (timeFraction) => timeFraction,
        draw: (progress) => {
          modal.style.top = `${50 * progress}%`;
        },
      });
    });
    item.addEventListener('mouseenter', () => {
      documentOverlay[index].style.opacity = '1';
      documentOverlay[index].style.width = '200px';
      documentOverlay[index].style.left = '50%';
      documentOverlay[index].style.transform = 'translateX(-50%)';
    });
    item.addEventListener('mouseleave', () => {
      documentOverlay[index].style.opacity = '0';
    });
  });

  overlay.addEventListener('click', (e) => {
    if (!e.target.closest('.docs-modal')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  });
};

export default docs;
