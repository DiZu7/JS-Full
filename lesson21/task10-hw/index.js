export function manageClasses() {
  document.querySelector('.one').classList.add('selected');
  document.querySelector('.two').classList.remove('selected');
  document.querySelector('.three').classList.remove('three_done');
  const classFour = document.querySelector('.four');
  if (classFour.classList.contains('some-class')) {
    classFour.classList.add('another-class');
  }
}

manageClasses();
