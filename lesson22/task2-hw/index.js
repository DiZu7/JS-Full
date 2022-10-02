const inputElem = document.querySelector('.text-input');

const consoleLog = () => {
  console.log(inputElem.value);
};

inputElem.addEventListener('change', consoleLog);
