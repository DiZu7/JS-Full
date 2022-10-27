// 1. check validation of inputs
// 1.1. search inputElem (all)
// 1.2. add eventListener on inputElems (use forEach)
// 1.3. write function of validation (use = formElem.reportValidity())
// 2. Register
// 2.1. add listener on form
// 2.2. write function of signing up
// 2.2.1. get data from form (use Object.fromEntries(new FormData(formElem))
// 2.2.2.write function of sending data to server
// 2.2.3. use then on promise, return response json, alert response, clear up inputs

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');
const inputElems = document.querySelectorAll('.form-input');

const baseUrl = 'https://63597995ff3d7bddb9a34f03.mockapi.io/api/v1/signUp';

const onValidate = () => {
  buttonElem.disabled = !formElem.reportValidity();
};

[...inputElems].forEach(inputElem => inputElem.addEventListener('input', onValidate));

const saveData = data => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(data),
  });
};

const onSignUp = e => {
  e.preventDefault();
  const userData = Object.fromEntries(new FormData(formElem));
  saveData(userData)
    .then(response => response.json())
    .then(data => {
      alert(JSON.stringify(data));
      formElem.reset();
    });
};

formElem.addEventListener('submit', onSignUp);
