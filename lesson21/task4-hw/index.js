export function setTitle(text) {
  const title = document.querySelector('.title');
  title.textContent = text;
  return title;
}

// test data
setTitle('new text added');
setTitle('another new text added');
