const inputElem = document.querySelector('.task-status');

const consoleLog = () => {
  console.log(inputElem.checked);
};

inputElem.addEventListener('change', consoleLog);
