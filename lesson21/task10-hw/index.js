export function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.remove('three_done');
  const listItemFour = document.querySelector('.four');

  if (listItemFour.classList.contains('some-class')) {
    listItemFour.classList.add('another-class');
  }
}
