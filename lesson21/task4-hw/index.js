export function setTitle(text) {
  const title = document.querySelector('.title');
  title.textContent = text;
  return title;
}

setTitle('new text added');
