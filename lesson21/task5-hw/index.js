export function setButton(buttonText) {
  document.querySelector('body').innerHTML = `<button>${buttonText}</button>`;
}

// test data
setButton('submit');
