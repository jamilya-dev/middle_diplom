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
      const bgColors = ['review-green', 'review-gray', 'review-orange', 'review-gray'];
      const blockPosition = ['review-arrow-left', 'review-arrow-right'];
      let itemIndex = 0;

      const commentElements = [];

      comments.forEach((comment) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment-item', 'review-margin-bottom', 'row');
        commentElement.style.display = 'flex';

        commentElement.innerHTML = `
          <div class="col-xs-3 col-sm-2">
            <div class="review-user">
              <img src="images/users/${comment.image ? comment.image : 'avatar.jpg'}" alt="${comment.author}" class="img-responsive avatar">
            </div>
          </div>
          <div class="col-xs-9 col-sm-9">
            <div class="review-inner review-arrow">
              <p class="text-normal">${comment.author}</p>
              <p>${comment.comment}</p>
            </div>
          </div>`;

        commentsContainer.append(commentElement);
        commentElements.push(commentElement);

        const currentElement = commentElement.querySelector('.review-inner');
        const imgItem = commentElement.querySelector('.col-xs-3.col-sm-2');

        if (comment.id % 2) {
          imgItem.style.order = '1';
        }

        const bgColorIndex = comment.id % bgColors.length;
        const positionIndex = comment.id % blockPosition.length;

        currentElement.classList.add(bgColors[bgColorIndex]);
        currentElement.classList.add(bgColors[bgColorIndex], blockPosition[positionIndex]);
      });

      const showComments = () => {
        commentElements.forEach((elem) => {
          elem.style.display = 'none';
        });
        for (let i = itemIndex; i < itemIndex + 3; i++) {
          commentElements[i % commentElements.length].style.display = 'flex';
        }
        itemIndex = (itemIndex + 1) % commentElements.length;

        if (itemIndex === 4) {
          itemIndex = 0;
        }
      };

      showComments();
      spinner.style.display = 'none';
      setInterval(showComments, 20000);
    });
  };

  setData();
};

export default comments;
