export function finishList() {
  const list = document.querySelector('.list');

  const listItemFirst = document.createElement('li');
  listItemFirst.textContent = 1;
  list.prepend(listItemFirst);

  const listItemSecond = document.createElement('li');
  listItemSecond.textContent = 8;
  list.append(listItemSecond);

  const specialItem = document.querySelector('.special');

  const listItemFourth = document.createElement('li');
  listItemFourth.textContent = 4;
  specialItem.before(listItemFourth);

  const listItemSixth = document.createElement('li');
  listItemSixth.textContent = 6;
  specialItem.after(listItemSixth);
}

finishList();
