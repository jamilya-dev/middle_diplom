const sendForms = (formId, someElem = '') => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement('div');
  const loadText = 'Загрузка...';
  const errorText = 'Ошибка...';
  const successText = 'Спасибо! Наш менеджер с вами свяжется';
  const nameInputs = form.querySelectorAll('input[name=fio]');
  const phoneInputs = form.querySelectorAll('input[name=phone]');

  const validate = (list) => {
    let success = true;
    list.forEach((input) => {
      if (input.value.trim() === '') {
        success = false;
      }
    });
    return success;
  };

  const sendData = (data) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll('input');
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (someElem) {
      const element = document.getElementById(someElem);
      formBody.someElem = element.value;
    }

    if (validate(formElements)) {
      statusBlock.textContent = loadText;
      form.append(statusBlock);

      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            if (input.type !== 'hidden') {
              input.value = '';
            }
          });
          setTimeout(() => {
            statusBlock.textContent = '';
          }, 2000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      formElements.forEach((input) => {
        if (input.value === '') input.style.borderColor = 'red';
      });
    }
  };

  nameInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#dfdfdf';
      input.value = input.value.replace(/[^а-яА-ЯёЁa-zA-Z]/i, '');
    });
  });
  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.style.borderColor = '#dfdfdf';
      input.value = input.value.replace(/[^\+\d]|\+(?=.*\+)|\d(?=.*\d{16})/g, '');
    });
  });

  try {
    if (!form) {
      throw new Error('Верните форму на место, пожалуйста!!!');
    }
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForms;
