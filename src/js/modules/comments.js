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

      comments.forEach((comment) => {
        if (itemIndex <= 2) {
          const commentElement = document.createElement('div');
          commentElement.classList.add('comment-item', 'review-margin-bottom', 'row');

          commentElement.innerHTML = `
          <div class="col-xs-3 col-sm-2" bis_skin_checked="1">
            <div class="review-user" bis_skin_checked="1">
              <img src="images/users/${comment.image ? comment.image : 'avatar.jpg'}" alt="${comment.author}" class="img-responsive avatar">
            </div>
          </div> 
          <div class="col-xs-9 col-sm-9" bis_skin_checked="1">
            <div class="review-inner review-arrow" bis_skin_checked="1">
              <p class="text-normal">${comment.author}</p>
              <p>${comment.comment}</p>
            </div>
          </div>`;
          commentsContainer.append(commentElement);

          const currentElement = commentElement.querySelector('.review-inner');
          const imgItem = commentElement.querySelector('.col-xs-3.col-sm-2');
          const bgColorIndex = itemIndex % bgColors.length;
          const positionIndex = itemIndex % blockPosition.length;

          currentElement.classList.add(bgColors[bgColorIndex], blockPosition[positionIndex]);

          if (itemIndex % 2) {
            imgItem.style.order = '1';
            commentElement.style.display = 'flex';
          }
          if (itemIndex === 2) {
            commentElement.classList.remove('review-margin-bottom');
          }
        }
        itemIndex++;
      });
      spinner.style.display = 'none';
    });
  };

  setData();
};
export default comments;
