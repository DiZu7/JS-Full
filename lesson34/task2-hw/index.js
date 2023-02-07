// 1. check validation of inputs
// 1.2. write function of validation (use = formElem.reportValidity())
// 2. Register
// 2.1. add listener on form
// 2.2. write function of signing up
// 2.2.1. get data from form (use Object.fromEntries(new FormData(formElem))
// 2.2.2.write function of sending data to server
// 2.2.3. use then on promise, return response json, alert response, clear up inputs

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const baseUrl = 'https://63949f6986829c49e8225bf8.mockapi.io/api/v1/events';
// const baseUrl = 'https://63597995ff3d7bddb9a34f03.mockapi.io/api/v1/signUp';

const onValidate = () =>
  formElem.reportValidity()
    ? buttonElem.removeAttribute('disabled')
    : buttonElem.setAttribute('disabled');

// const onValidate = () =>
//   formElem.reportValidity()
//     ? buttonElem.removeAttribute('disabled')
//     : buttonElem.setAttribute('disabled');

// const onValidate = () => {
//   buttonElem.disabled = !formElem.reportValidity();
// };

formElem.addEventListener('input', onValidate);

const saveData = data => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
};

const onRegister = e => {
  e.preventDefault();
  const userData = Object.fromEntries(new FormData(formElem));
  saveData(userData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener('submit', onRegister);
