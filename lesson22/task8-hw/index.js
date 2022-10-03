const checkboxElem = document.querySelector('.task-status');

const consoleLog = event => {
  console.log(event.target.checked);
};

checkboxElem.addEventListener('change', consoleLog);
