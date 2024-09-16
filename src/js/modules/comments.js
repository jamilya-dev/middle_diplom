const comments = () => {
  const commentsContainer = document.querySelector('.comments-container');

  const spinner = document.createElement('div');
  spinner.classList.add('loading-spinner');
  spinner.style.display = 'block';
  spinner.style.cssText = 'display: flex; justify-content: center;';
  commentsContainer.prepend(spinner);

  fetch('../images/users/spinner.svg')
    .then((response) => response.text())
    .then((data) => {
      spinner.innerHTML = data;
    });

  const getData = () => {
    return fetch('../comments.json')
      .then((response) => response.json())
      .then((data) => {
        return data.comments;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setData = () => {
    getData().then((comments) => {
      const bgColors = ['review-green', 'review-gray', 'review-orange'];
      const blockPosition = ['review-arrow-left', 'review-arrow-right'];
      let itemIndex = 0;

      const commentElements = [];

      comments.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item', 'review-margin-bottom', 'row');

        commentElement.innerHTML = `
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${comment.image ? comment.image : 'avatar.jpg'}" alt="${comment.author}" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-arrow">
              <p class="text-normal">${comment.author} ${itemIndex}</p>
              <p>${comment.comment}</p>
            </div>
          </div>`;

        commentsContainer.append(commentElement);

        commentElements.push(commentElement);

        const currentElement = commentElement.querySelector('.review-inner');
        const imgItem = commentElement.querySelector('.col-xs-3.col-sm-2');
        const bgColorIndex = itemIndex % bgColors.length;
        const positionIndex = itemIndex % blockPosition.length;

        currentElement.classList.add(bgColors[bgColorIndex], blockPosition[positionIndex]);

        itemIndex++;
      });

      const showComments = () => {
        commentElements.forEach((elem) => {
          elem.style.display = 'none';
        });
        for (let i = 0; i < 3; i++) {
          const indexToShow = (itemIndex + i) % commentElements.length;
          commentElements[indexToShow].style.display = 'flex';

          const imageElement = commentElements[indexToShow].querySelector('.col-xs-3.col-sm-2');

          const style = document.createElement('style');

          if (i === 1) {
            imageElement.style.order = '1';

            style.textContent = `
            .review-arrow-right::after {
                right: -39px; 
            }`;
            document.head.appendChild(style);
          } else {
            imageElement.style.order = '0';
            style.textContent = `
            .review-arrow-right::after {
                right: 39px; 
            }`;
          }
        }
        itemIndex = (itemIndex + 1) % commentElements.length;
      };
      showComments();
      spinner.style.display = 'none';
      setInterval(showComments, 8000);
    });
  };

  setData();
};

export default comments;
