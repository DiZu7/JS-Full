export function squaredNumbers() {
  const list = document.querySelectorAll('.number');

  [...list].map(listItem => {
    listItem.dataset.squaredNumber = listItem.dataset.number ** 2;
  });
}
