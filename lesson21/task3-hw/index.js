export function getTitle() {
  return document.querySelector('.title').textContent;
}

console.log(getTitle());

export function getDescription() {
  return document.querySelector('.about').innerText;
}

console.log(getDescription());

export function getPlans() {
  return document.querySelector('.plans').innerHTML;
}

console.log(getPlans());

export function getGoal() {
  return document.querySelector('.goal').outerHTML;
}

console.log(getGoal());
