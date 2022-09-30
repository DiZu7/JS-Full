export function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  const parentElem = spanElem.closest('.box');
  return parentElem.getAttribute('data-section');
}
