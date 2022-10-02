const divElem = document.querySelector('.rect_div');
const pElem = document.querySelector('.rect_p');
const spanElem = document.querySelector('.rect_span');

const logTarget = (text, color) => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px">${text}</span>`;
};

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'SPAN', 'grey');

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'SPAN', 'green');

divElem.addEventListener('click', logGreyDiv, true);
pElem.addEventListener('click', logGreyP, true);
spanElem.addEventListener('click', logGreySpan, true);

spanElem.addEventListener('click', logGreenSpan);
pElem.addEventListener('click', logGreenP);
divElem.addEventListener('click', logGreenDiv);

const clearField = () => {
  const eventsListElem = document.querySelector('.events-list');
  eventsListElem.textContent = '';
};

const buttonClearElem = document.querySelector('.clear-btn');
buttonClearElem.addEventListener('click', clearField);

const removeHandlersBtnElem = document.querySelector('.remove-handlers-btn');
const rectElem = document.querySelectorAll('.rect');
removeHandlersBtnElem.removeEventListener('click', logGreyDiv);
