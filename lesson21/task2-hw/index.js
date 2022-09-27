export function getItemsList() {
  const elementsList = document.querySelectorAll('.technology');
  console.dir(elementsList);
  return elementsList;
}

getItemsList();

export function getItemsArray() {
  const elementsList = document.querySelectorAll('.tool');
  const elementsArray = Array.from(elementsList);
  console.dir(elementsArray);
  return elementsArray;
}

getItemsArray();
