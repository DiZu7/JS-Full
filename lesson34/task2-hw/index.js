// create registerBtnElem
// add listener 'submit' on registerBtnElem with the function onSendData
// write the function onSendData (request to db with method POST - save data + clean up the input field ), answer - alert with data in object data type
// check the registerBtnElem on validation (use reportValidity() in form elem)

const formElem = document.querySelector('.login-form');
const buttonElem = document.querySelector('.submit-button');

const inputElems = document.querySelectorAll('.form-input');

const onValidate = () => {
  buttonElem.disabled = !formElem.reportValidity();
};

[...inputElems].forEach(inputElem => inputElem.addEventListener('input', onValidate));

const baseUrl = 'https://63597995ff3d7bddb9a34f03.mockapi.io/api/v1/signUp';

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
    .then(data => alert(JSON.stringify(data)));
};

formElem.addEventListener('submit', onSignUp);
