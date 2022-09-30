export function finishList() {
  const list = document.querySelector('.list');

  const listItemFirst = document.createElement('li');
  list.prepend(listItemFirst);
  listItemFirst.textContent = 1;

  const listItemSecond = document.createElement('li');
  list.append(listItemSecond);
  listItemSecond.textContent = 8;

  const specialItem = document.querySelector('.special');

  const listItemFourth = document.createElement('li');
  specialItem.before(listItemFourth);
  listItemFourth.textContent = 4;

  const listItemSixth = document.createElement('li');
  specialItem.after(listItemSixth);
  listItemSixth.textContent = 6;
}

finishList();
