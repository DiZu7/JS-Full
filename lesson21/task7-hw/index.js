export function createButton(buttonText) {
  const button = document.createElement('button');
  button.textContent = buttonText;
  document.querySelector('body').append(button);
}

// test data
createButton('Send Email');
