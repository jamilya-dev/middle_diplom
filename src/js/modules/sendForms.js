const sendForms = (formId, someElem) => {
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

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (someElem) {
      const element = document.getElementById(someElem);
      formBody.someElem = element.value;
    }

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = '';
            input.classList.remove('success');
          });
          setTimeout(() => {
            statusBlock.textContent = '';
          }, 2000);
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert(`Данные не валидны!!!`);
    }
  };

  nameInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^а-яА-ЯёЁa-zA-Z]/i, '');
      if (input.value !== '') input.classList.add('success');
    });
  });
  phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/[^\+\d]|\+(?=.*\+)|\d(?=.*\d{16})/g, '');
      if (input.value !== '') input.classList.add('success');
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
