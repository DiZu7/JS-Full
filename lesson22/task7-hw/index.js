const inputElems = document.querySelector('.text-input');

const consoleLog = event => {
  console.log(event.target.value);
};

inputElems.addEventListener('change', consoleLog);
