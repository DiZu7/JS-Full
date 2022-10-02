const btnElem = document.querySelector('.single-use-btn');

const consoleLog = () => {
  console.log('clicked');
};

btnElem.addEventListener('click', consoleLog, { once: true });
