const inputElem = document.querySelector('.search__input');
const btnElem = document.querySelector('.search__btn');

const consoleLog = () => {
  console.log(inputElem.value);
};

btnElem.addEventListener('click', consoleLog);
