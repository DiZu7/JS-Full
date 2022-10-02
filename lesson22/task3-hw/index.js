const inputElem = document.querySelector('.task-status');

const consoleLog = () => {
  if (inputElem.checked) {
    console.log(true);
  }
  console.log(false);
};

inputElem.addEventListener('change', consoleLog);
