const btnElem = document.querySelector('.single-use-btn');

const consoleLog = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', consoleLog);
};

btnElem.addEventListener('click', consoleLog);
